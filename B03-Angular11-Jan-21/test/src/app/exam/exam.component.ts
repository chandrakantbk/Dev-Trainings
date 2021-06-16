import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {


  @Input('questions_list') list: any;

  @Output() onExamChange = new EventEmitter();


  correct_answer_counter = 0;
  result_text = '';
  is_test_submitted = false;


  constructor() { }

  ngOnChanges(): void {
    this.correct_answer_counter = 0;
    this.result_text = '';
    this.is_test_submitted = false;
  }

  ngOnDestroy(): void {
    this.submitResult();
    this.list.forEach((item: any) => { item.user_answer = '' })
  }

  ngOnInit(): void {


  }

  submitResult() {

    this.is_test_submitted = true;

    this.correct_answer_counter = 0;

    for (let obj of this.list) {
      if (obj.answer == obj.user_answer) {
        this.correct_answer_counter++;
      }
    }

    let percentage = (this.correct_answer_counter / this.list.length * 100);

    this.result_text = percentage + '%';

    if (percentage < 50) {
      let obj = { result: 'fail', marks: percentage };
      this.onExamChange.emit(obj)
    } else {

      let obj = { result: 'pass', marks: percentage };
      this.onExamChange.emit(obj)

    }


  }

}
