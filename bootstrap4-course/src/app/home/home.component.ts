import { Component, OnInit } from '@angular/core';

import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const array = [1, 2, 3];
    console.log( _.shuffle(array) );
  }

}
