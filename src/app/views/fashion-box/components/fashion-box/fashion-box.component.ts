import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-fashion-box',
  templateUrl: './fashion-box.component.html'
})
export class FashionBoxComponent implements OnInit {
  private avatarUrl: String;
  private personName: String;
  private personOccupation: String;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const profileData = this.profileService.getProfile();

    this.avatarUrl = profileData.avatarUrl;
    this.personName = profileData.personName;
    this.personOccupation = profileData.personOccupation;
  }

}
