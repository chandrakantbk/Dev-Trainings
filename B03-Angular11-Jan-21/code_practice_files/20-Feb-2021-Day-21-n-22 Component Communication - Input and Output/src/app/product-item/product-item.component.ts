import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product_name') product_name: any;

  @Output('productChange') productChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect() {
    console.log(this.product_name)

    this.productChange.emit(this.product_name)

  }

}
