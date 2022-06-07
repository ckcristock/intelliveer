import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddPatientComponent } from './quick-add-patient.component';

describe('QuickAddPatientComponent', () => {
  let component: QuickAddPatientComponent;
  let fixture: ComponentFixture<QuickAddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAddPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
