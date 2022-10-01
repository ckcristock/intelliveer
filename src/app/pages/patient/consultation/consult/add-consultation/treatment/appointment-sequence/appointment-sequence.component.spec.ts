import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSequenceComponent } from './appointment-sequence.component';

describe('AppointmentSequenceComponent', () => {
  let component: AppointmentSequenceComponent;
  let fixture: ComponentFixture<AppointmentSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
