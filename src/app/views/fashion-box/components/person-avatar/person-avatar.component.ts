import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-avatar',
  templateUrl: './person-avatar.component.html'
})
export class PersonAvatarComponent implements OnInit {
  @Input() avatarUrl: String;

  constructor() {}

  ngOnInit() {
  }

}
