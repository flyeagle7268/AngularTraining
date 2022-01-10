import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{

  activeCounter: number = 0;
  inActiveCounter: number = 0;

  CountActive(){
    this.activeCounter++;
    console.log('Active to Inactive ' + this.activeCounter);
  }

  CountInactive(){
    this.inActiveCounter++;
    console.log('Inactive to Active' + this.inActiveCounter);
  }
}
