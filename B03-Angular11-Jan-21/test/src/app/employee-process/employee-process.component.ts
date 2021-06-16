import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-process',
  templateUrl: './employee-process.component.html',
  styleUrls: ['./employee-process.component.css']
})
export class EmployeeProcessComponent {

  emp_lists: any = [
    { name: "ABC", emp_id: 11 },
    { name: "BBB", emp_id: 12 },
    { name: "CCC", emp_id: 13 },
    { name: "DDD", emp_id: 14 },
    { name: "EEE", emp_id: 15 },
  ]

  constructor() {
    this.emp_lists = this.emp_lists.map((obj: any) => {
      return { ...obj, is_checked: false }
    });

  }

  selected_ids: any = [];

  handleSelected() {
    this.selected_ids = [];

    for (let item of this.emp_lists) {

      if (item.is_checked == true) {
        let obj: any = { date: new Date(), id: item.emp_id }

        this.selected_ids.push(obj)

      }

    }

    console.log(this.selected_ids)

  }

}
