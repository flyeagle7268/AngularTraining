import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.user.pipe(
        //takes one of the user objects from user observable and unsubscrible automatically using take operator
        take(1),
        //first execute user observable and then executes http request using exhaustMap
        exhaustMap(user => {
          if (!user){
            return next.handle(req);
          }
          const modifiedRequest = req.clone({params: new HttpParams().set('auth', user.token)});
          return next.handle(modifiedRequest);
        })
    );
  }

}
