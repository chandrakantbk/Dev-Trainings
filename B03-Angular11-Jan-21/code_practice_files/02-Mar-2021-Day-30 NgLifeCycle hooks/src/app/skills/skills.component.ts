import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input('name') name: any;
  @Output() myskilChange = new EventEmitter();


  num: number = 10;

  constructor() {
    console.log("skills constructor called")
  }

  ngOnChanges(myvar: SimpleChanges): any {

    if (myvar.name.firstChange == true) {
      console.log("first time changes")
      
    } else {
      console.log("ngOnChanges called")
      console.log(myvar)

      console.log(myvar.name.previousValue)

      console.log(this.name)
    }

  }

  ngOnInit(): void {
    console.log("ngOnInit Skills Init")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy: SkillsComponent is destroying")
  }

  ngDoCheck() {
    // logic
    console.log("ngDoCheck called")
  }

  sendDataToParent() {
    this.myskilChange.emit("my data")
  }

}
