import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('myname') myvar: any;
  @Output() mynameChange = new EventEmitter();

  isComplete = false;

  constructor() { }

  ngOnInit(): void {

  }

  markItemComplete() {
    if (this.isComplete) {
      // return back if it's already marked as complete
      return false;
    }

    this.isComplete = true;
    let str = 'completed';
    this.mynameChange.emit(str);
    return true;
  }

}
