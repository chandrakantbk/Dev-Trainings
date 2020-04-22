import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthComponent } from './growth.component';

describe('GrowthComponent', () => {
  let component: GrowthComponent;
  let fixture: ComponentFixture<GrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
