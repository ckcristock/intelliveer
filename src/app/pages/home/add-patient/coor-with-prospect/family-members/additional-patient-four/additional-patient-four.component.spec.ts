import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPatientFourComponent } from './additional-patient-four.component';

describe('AdditionalPatientFourComponent', () => {
  let component: AdditionalPatientFourComponent;
  let fixture: ComponentFixture<AdditionalPatientFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPatientFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPatientFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
