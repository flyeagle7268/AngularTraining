import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signInForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signInForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  //one way
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  //other way
  onSubmit(){
    this.submitted = true;
    this.user.username = this.signInForm.value.userData.username;
    this.user.email = this.signInForm.value.userData.email;
    this.user.question = this.signInForm.value.secret;
    this.user.answer = this.signInForm.value.questionAnswer;
    this.user.gender = this.signInForm.value.gender;

    this.signInForm.reset();
  }
}
