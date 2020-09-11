import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTimerComponent } from './test-timer.component';

describe('TestTimerComponent', () => {
  let component: TestTimerComponent;
  let fixture: ComponentFixture<TestTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
