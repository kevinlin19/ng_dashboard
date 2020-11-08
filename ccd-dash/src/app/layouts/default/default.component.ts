import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpened = false;
  constructor() { }

  ngOnInit(): void { }

  toggleSideTrigger(){
    this.sideBarOpened = !this.sideBarOpened;
  }

}
