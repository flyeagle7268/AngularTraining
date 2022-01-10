import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';
  @ViewChild('f') loginForm: NgForm;
  submitted = false;

  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(){
    this.submitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.subscription = this.loginForm.value.subscriptions;
    this.user.password = this.loginForm.value.password;
  }

}
