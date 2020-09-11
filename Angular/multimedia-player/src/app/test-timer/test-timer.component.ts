import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-test-timer',
  templateUrl: './test-timer.component.html',
  styleUrls: ['./test-timer.component.css']
})
export class TestTimerComponent implements OnInit {

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  /*

    input in: minutes
    
    if 1hr >= then hh mm ss


  */

  is_paused = true;

  config = {
    leftTime: 10,
    notify: [2, 4],
    demand: false,
  }

  constructor() { }

  ngOnInit() {
    // this.countdown.begin();
    console.log("ngOnInit init");
  }

  ngAfterViewInit(): void {
    console.log("View init");
    this.countdown.event.subscribe(elm => {
      console.log(elm);
    })

  }

  handleEvent(e) {
    console.log(e);
  }

  begin() {
    this.countdown.begin();



    this.is_paused = true;
  }

  restart() {
    this.countdown.restart();
    this.is_paused = true;
  }

  stop() {
    this.countdown.stop();
    this.is_paused = !this.is_paused;
  }

  pauseStart() {
    this.is_paused = !this.is_paused;
    if (this.is_paused) {
      this.countdown.resume();
    } else {
      this.countdown.pause();
    }

  }




}
