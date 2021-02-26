import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  city_name = "";

  city_1 = 'pune';

  handleEvent() {
    console.log(typeof this.city_name)
  }
}
