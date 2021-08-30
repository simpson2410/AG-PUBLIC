import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    this.initFacebookService();
  }
  // facebook init
private initFacebookService(): void {
  const initParams: InitParams = { xfbml: true, version: 'v3.2' };
  this.facebookService.init(initParams);
}

}
