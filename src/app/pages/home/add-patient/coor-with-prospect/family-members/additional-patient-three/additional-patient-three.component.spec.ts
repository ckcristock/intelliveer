import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPatientThreeComponent } from './additional-patient-three.component';

describe('AdditionalPatientThreeComponent', () => {
  let component: AdditionalPatientThreeComponent;
  let fixture: ComponentFixture<AdditionalPatientThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPatientThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPatientThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
