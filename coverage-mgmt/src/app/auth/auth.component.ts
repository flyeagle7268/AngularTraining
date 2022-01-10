import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData } from './auth-response';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isSignUp = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignup(){
    this.isSignUp = true;
  }

  onSubmit(form: NgForm){
    console.log(form);
    if (!form.valid) return;

    const email = form.value.email;
    const pwd = form.value.password;
    let authObservable: Observable<AuthResponseData>;

    if (this.isSignUp) {
      authObservable = this.authService.signup(email, pwd)
    }
    else{
      authObservable = this.authService.login(email, pwd);
    }

    authObservable.subscribe(
      (respData) => {
        console.log(respData);
        if (this.isSignUp){
          this.router.navigate(['/auth']);
        }
        else{
          this.router.navigate(['/coverage']);
        }
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    )

  }

}
