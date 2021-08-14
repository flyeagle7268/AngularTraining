import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  closeSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private componentFactorResolver: ComponentFactoryResolver
  ) {}

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.auth.login(email, password);
    } else {
      authObservable = this.auth.signUp(email, password);
    }

    //observable execute for both login and signup
    authObservable.subscribe(
      (respData) => {
        console.log(respData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
        this.onAlertHandler(errorMessage);
        console.log(errorMessage);
      }
    );

    form.reset();
  }

  onErrorHandler() {
    this.error = null;
  }

  //Dynamic component creation
  onAlertHandler(message: string) {
    const alertCompFactory = this.componentFactorResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const compRef  = hostViewContainerRef.createComponent(alertCompFactory);
    compRef.instance.message = message;
    this.closeSubscription = compRef.instance.close.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    })

  }

  ngOnDestroy(){
    if (this.closeSubscription){
      this.closeSubscription.unsubscribe();
    }

  }
}
