import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  myProfile: UserProfile = {
    name: "Ajla",
    contact: "ajla@gmail.com",
    bio: "I love cookies!",
  };

  constructor() { }


  getUserProfile() {
    return this.myProfile;
  }

  setUserProfile(profile: UserProfile) {
    this.myProfile = profile;
  }

}