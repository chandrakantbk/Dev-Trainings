import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {

  @Input('footerData') footerData: any;

  current_page = "Sample Text";

  constructor() { }

  ngOnInit(): void {
  }

}
