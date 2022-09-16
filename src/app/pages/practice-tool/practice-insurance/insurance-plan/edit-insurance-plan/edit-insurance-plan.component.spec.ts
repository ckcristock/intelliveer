import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsurancePlanComponent } from './edit-insurance-plan.component';

describe('EditInsurancePlanComponent', () => {
  let component: EditInsurancePlanComponent;
  let fixture: ComponentFixture<EditInsurancePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsurancePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsurancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
