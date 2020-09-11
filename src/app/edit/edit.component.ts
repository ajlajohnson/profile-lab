import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private newservice: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  updateProfile(form: NgForm) {
    // console.log(form.value);
    this.newservice.setUserProfile(form.value);
    this.router.navigate(['/profile']);
  }

}
