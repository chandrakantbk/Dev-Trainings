import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSyntaxComponent } from './event-syntax.component';

describe('EventSyntaxComponent', () => {
  let component: EventSyntaxComponent;
  let fixture: ComponentFixture<EventSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
