import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test';
  is_show = true;

  constructor() {
    console.log("constructor is called")
  }

  ngOnInit(): void {
    console.log("App ngOnInit called")
  }

  changeTitle() {
    this.title = "My Title"
  }

  hideSkills() {
    this.is_show = false;
  }

  handleData(e: any) {
    console.log(e)
  }

}
