import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  title = 'Exam Application';

  current_page = 'practice';

  is_my_name = true

  is_level_1_passed = false;

  current_exam_set: any = [];

  questions_level_1 = [
    { question: "What is 5 + 5?", answer: 10, },
    { question: "What is 10 + 10?", answer: 20, },
    { question: "What is 25 + 25?", answer: 50 },
    { question: "What is 200 + 200?", answer: 400 },
    { question: "What is 200 + 600?", answer: 800 },
  ];

  questions_level_2 = [
    { question: "Level 2: What is 50 - 50?", answer: 0 },
    { question: "Level 2: What is 100 - 100?", answer: 0 },
    { question: "Level 2: What is 200 + 200?", answer: 400 },
    { question: "Level 2: What is 600 - 200?", answer: 400 },
  ]

  constructor() { }

  ngOnInit() {

  }

  showContent(page_type: string, level_number?: number) {
    this.current_page = page_type;

    if (level_number == 1) {
      this.current_exam_set = [...this.questions_level_1];

    } else if (level_number == 2) {
      this.current_exam_set = [...this.questions_level_2];
    }

  }

  handleExamData(item: any) {

    console.log("In parent")

    if (item.result == 'fail') {
      this.is_level_1_passed = false;
    } else {
      this.is_level_1_passed = true;
    }

  }

}
