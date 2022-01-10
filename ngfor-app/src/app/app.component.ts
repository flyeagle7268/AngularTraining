import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor-app';

  showSecret = false;
  logs = [];

  displaySecret(){
    this.showSecret = !this.showSecret;

    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
