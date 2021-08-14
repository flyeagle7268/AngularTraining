import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderMessageEnum, RouterEnum } from '../services/router.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerText = 'Default Header';

  routerEnum = RouterEnum;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigate(link: string){
    this.headerText = this.getHeaderTextMessage(link);
    this.router.navigate([link]);

  }

  getHeaderTextMessage(routeHeader: string) {
    console.log(routeHeader);
    return HeaderMessageEnum[routeHeader];
  }


}




