import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProcessComponent } from './employee-process.component';

describe('EmployeeProcessComponent', () => {
  let component: EmployeeProcessComponent;
  let fixture: ComponentFixture<EmployeeProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
