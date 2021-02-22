import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-communication',
  templateUrl: './parent-to-child-communication.component.html',
  styleUrls: ['./parent-to-child-communication.component.css']
})
export class ParentToChildCommunicationComponent implements OnInit {
  product_list = [
    { title: "Product 1", price: 2500 },
    { title: "Product 2", price: 500 },
    { title: "Product 3", price: 6000 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  applyCoupan() {
    for (let val of this.product_list) {
      val.price = val.price - (val.price * 0.05)
    }
  }


}
