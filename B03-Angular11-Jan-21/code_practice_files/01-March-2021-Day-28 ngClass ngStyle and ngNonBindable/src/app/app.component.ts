import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  is_success = false;
  text_1 = 's';
  text_2 = 'a';
  mycolor = 'green';

  checkSimilar() {
    if (this.text_1 == this.text_2) {

      this.is_success = true;

    } else {
      this.is_success = false;
    }
  }


  student_list = [
    { name: 'Akshay', city: 'pune' },
    { name: 'Kanchan', city: 'mumbai' },
    { name: 'SK', city: 'pune' },
    { name: 'Anuja', city: 'BLR' },
    { name: 'Sanjay', city: 'KA' },
  ]


}




