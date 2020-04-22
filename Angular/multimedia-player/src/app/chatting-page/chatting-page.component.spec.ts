import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingPageComponent } from './chatting-page.component';

describe('ChattingPageComponent', () => {
  let component: ChattingPageComponent;
  let fixture: ComponentFixture<ChattingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
