import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPatientTwoComponent } from './additional-patient-two.component';

describe('AdditionalPatientTwoComponent', () => {
  let component: AdditionalPatientTwoComponent;
  let fixture: ComponentFixture<AdditionalPatientTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPatientTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPatientTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
