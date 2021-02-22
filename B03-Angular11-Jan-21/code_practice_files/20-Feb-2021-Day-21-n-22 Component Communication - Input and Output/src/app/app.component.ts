import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected_product = "N/A";

  p1 = "Laptop";
  p2 = "Mobilr";
  p3 = "Dumb";
  p4 = "Csard";

  handleChildData(data: any) {
    this.selected_product = data;
  }

}
