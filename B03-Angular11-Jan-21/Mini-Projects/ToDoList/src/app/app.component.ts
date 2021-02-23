import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list_1_text = '1. Do complete Assignments';
  list_2_text = '2. Upload to github';

  no_of_todos = 5;

  handleListEvent(itemData: any) {
    console.log(itemData);
    this.no_of_todos = this.no_of_todos - 1;
  }

}
