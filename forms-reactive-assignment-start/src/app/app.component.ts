import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, Validators.required, this.forbiddenEmail),
      'status': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test'){
      return {'forbiddenProjectName': true};
    }

    return null;
  }

  forbiddenEmail(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "test@test.com"){
          resolve({'forbiddenEmail': true});
        }else{
          resolve(null);
        }
      }, 1000);
    })
    return promise;
  }

}
