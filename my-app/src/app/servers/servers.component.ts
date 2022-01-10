import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServer = false;
  serverCreation = 'No server was created';
  serverName = '';
  serverCreated = false;

  constructor() { }

  onAddServer(){
    this.serverCreated = true;
    this.serverCreation = this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.addServer = true;
    }, 2000 );

  }

}
