import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildCommunicationComponent } from './parent-to-child-communication.component';

describe('ParentToChildCommunicationComponent', () => {
  let component: ParentToChildCommunicationComponent;
  let fixture: ComponentFixture<ParentToChildCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentToChildCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
