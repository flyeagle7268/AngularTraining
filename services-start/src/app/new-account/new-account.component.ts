import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggerService: LoggingService, private accountService: AccountService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName, accountStatus);

    // this.loggerService.LogStatus(accountStatus);

  }
}
