import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-title',
  templateUrl: './person-title.component.html',
  styleUrls: ['./person-title.component.scss']
})
export class PersonTitleComponent implements OnInit {
  @Input() personName: String;
  @Input() personOccupation: String;

  constructor() { }

  ngOnInit() {
  }

}
