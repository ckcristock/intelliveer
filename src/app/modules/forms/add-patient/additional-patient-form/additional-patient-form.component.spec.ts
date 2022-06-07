import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPatientFormComponent } from './additional-patient-form.component';

describe('AdditionalPatientFormComponent', () => {
  let component: AdditionalPatientFormComponent;
  let fixture: ComponentFixture<AdditionalPatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPatientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
