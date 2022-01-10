import { Component, OnInit } from '@angular/core';
import { CounterService } from './active-users/services/counter.service';
import { UserService } from './active-users/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inactiveCounter;
  activeCounter;

  constructor(private userService: UserService, private counterService: CounterService){

  }

  ngOnInit(): void {
    this.inactiveCounter = this.counterService.inActiveCounter;
    this.activeCounter  = this.counterService.activeCounter;
;
  }

}
