import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { AuthResponseData } from "./auth-response";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signInUrl = environment.signInUrl+environment.apiKey;
  private signUpUrl = environment.singUpUrl+environment.apiKey;
  private tokenExpirationTimer: any;

  /** User subject */
  user = new BehaviorSubject<User>(null);

  constructor(private router: Router, private http: HttpClient){}

  /**
   * login user with email and password.
   * @param email
   * @param pwd
   * @returns AuthResponseData with observable
   */
  login(email: string, pwd: string){
    return this.http.post<AuthResponseData>(this.signInUrl, {
      email: email,
      password: pwd,
      returnSecureToken: true
    })
    .pipe(
      catchError(this.handleError),
      tap((responseData) => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        )
      })
    )
  }

  /**
   * Signup new user with valid email id and password
   * @param email
   * @param pwd
   * @returns AuthResponseData with Observable
   */
  signup(email: string, pwd: string){
    console.log(this.signUpUrl);
    return this.http.post<AuthResponseData>(this.signUpUrl, {
      email: email,
      password: pwd,
      returnSecureToken: true
    })
    .pipe(
      catchError(this.handleError),
      tap((responseData) => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        )
      })
    )

  }

  /**
   * logs out the current logged in user and redirects to home page.
   */
  logout(){
    this.user.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  /**
   * Handles user authentication
   * @param email
   * @param userId
   * @param token
   * @param expiresIn
   */
  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));

  }

  autoLogin(){
    //load userdata from local storage
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;} = JSON.parse(localStorage.getItem('userData'));

    if (!userData) return;

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    //Emit to notify subscribers
    if (loadedUser)
    {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }

  }

  /**
   * logs out automatically after timeout duration
   * @param expirationDuration
   */
  private autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


  /**
   * Handles error for the Http Response
   * @param errorResp
   * @returns custom error message in Observable
   */
  private handleError(errorResp: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred';
    console.log(errorResp);
    if (!errorResp.error || !errorResp.error.error){
      return throwError(errorMessage)
    }

      switch(errorResp.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email doesnt exist';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password';
          break;
      }
      return throwError(errorMessage);
  }

}
