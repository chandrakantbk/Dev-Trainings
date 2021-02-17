import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  /*  interpolation: ["[[", "]]"], */
})

export class SkillsComponent implements OnInit {

  title = "Hello Angular from Skills Component";
  place_title = "Enter your name";
  img_src = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg";

  num = 10;

  check_flag = true;

  flag = false;

  div_content = "Hello DIV";


  color_name = "blue";

  constructor() { }

  ngOnInit(): void {
  }

}
