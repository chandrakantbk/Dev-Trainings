import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Education2Component } from './education2.component';

describe('Education2Component', () => {
  let component: Education2Component;
  let fixture: ComponentFixture<Education2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Education2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Education2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
