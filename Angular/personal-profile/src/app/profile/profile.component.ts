import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  educations = [
    { year: 2010, title: "SSC" },
    { year: 2012, title: "HSC" },
    { year: 2020, title: "BE" },
  ]

  constructor() { }

  ngOnInit() {
  }


}
