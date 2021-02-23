import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  myvar = "";

  constructor() { }

  ngOnInit(): void {
  }

  sendData(e: any) {
    console.log(e);
    this.myvar = "HOME"
  }

}
