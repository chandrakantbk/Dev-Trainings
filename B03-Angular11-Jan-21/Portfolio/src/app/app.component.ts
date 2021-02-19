import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  product_list = [
    { title: "Product 1", price: 2500 },
    { title: "Product 2", price: 500 },
    { title: "Product 3", price: 6000 },
  ]

  handleBuy(e: any) {

  }

  applyCoupan() {
    for (let val of this.product_list) {
      val.price = val.price - (val.price * 0.05)
    }
  }

}
