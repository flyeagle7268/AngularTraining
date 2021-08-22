import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

//import { showToolTip } from 'src/assets/scripts/custom.js';

//uses ng-bootstrap https://ng-bootstrap.github.io/#/components/tooltip/examples

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {

  name = 'World';

  constructor() { }

  ngOnInit(): void {
    //https://www.angularjswiki.com/angular/how-to-install-and-use-jquery-in-angular-projects/
    //https://stackoverflow.com/questions/58662015/how-do-i-add-this-javascript-and-html-code-into-an-angular-project-and-can-i-re

    //$.getScript('./assets/scripts/custom.js');
  }


}
