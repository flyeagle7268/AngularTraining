import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIncrementedNumber(data: {num: number}){
    if (data.num % 2 === 0){
      this.evenNumbers.push(data.num);
    }
    else{
      this.oddNumbers.push(data.num);
    }
  }

}
