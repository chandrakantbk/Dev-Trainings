import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-syntax',
  templateUrl: './event-syntax.component.html',
  styleUrls: ['./event-syntax.component.css']
})
export class EventSyntaxComponent implements OnInit {

  first_value = 0;
  sec_value = 10;
  btn_text = '';
  third = 0;
  my_variable = 400;

  constructor() { }

  ngOnInit(): void {
  }


  handleModelValue(e: any) {
    console.log(e)
    this.sec_value = e;
  }


  changeMyValue(h: any) {
    console.log(h)
    console.log(h.target)
    console.log(h.target.value)
    this.first_value = h.target.value;
  }

  handleChangeValue(e: any) {
    console.log(e);
    this.my_variable = e.target.value;
    console.log(e.target.classList)
    e.target.classList.add('bg-warning')
  }

  removeFocus(e: any) {
    e.target.classList.remove('bg-warning')
  }

}
