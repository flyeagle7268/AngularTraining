import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementedNumber = new EventEmitter<{num: number}>();
  interval: any;
  lastNumber = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.interval = setInterval(() => {
          this.incrementedNumber.emit({num: this.lastNumber + 1});
          this.lastNumber++;
        }, 1000);
  }

  onGamePause(){
    clearInterval(this.interval);
  }

}
