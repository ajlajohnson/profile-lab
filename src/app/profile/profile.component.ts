import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.getProfileYo();
  }

  getProfileYo() {
    this.userProfile = this.profileService.getProfileYo();
  }

}