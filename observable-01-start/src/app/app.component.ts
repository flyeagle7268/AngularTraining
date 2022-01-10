import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activate = false;
  userSubscription: Subscription;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.activateEmitter.subscribe((activateEmit) => {
    this.activate = activateEmit;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
