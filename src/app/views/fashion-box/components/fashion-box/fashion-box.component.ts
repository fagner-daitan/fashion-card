import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-box',
  templateUrl: './fashion-box.component.html'
})
export class FashionBoxComponent implements OnInit {
  private avatarUrl: String;
  private personName: String;
  private personOccupation: String;

  constructor() {
    this.avatarUrl = 'https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-hover-1-299x347.jpg';
    this.personName = 'Robert Smith';
    this.personOccupation = 'Developer and Startup entrepreneur';
  }

  ngOnInit() {
  }

}
