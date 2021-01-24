import { Component, OnInit } from '@angular/core';
import { Util } from './../shared-class/util';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private util: Util) { }

  ngOnInit() {
    let util = new Util('CK', 28);
    this.util.printName();
  }


}
