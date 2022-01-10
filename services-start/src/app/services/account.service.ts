import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({providedIn: 'root'})
export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'Active'
    },
    {
      name: 'Test Account',
      status: 'Inactive'
    },
    {
      name: 'Hidden Account',
      status: 'Unknown'
    }
  ];

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.loggingService.LogStatus(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.LogStatus(status);
  }

}
