import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlanFormComponent } from './insurance-plan-form.component';

describe('InsurancePlanFormComponent', () => {
  let component: InsurancePlanFormComponent;
  let fixture: ComponentFixture<InsurancePlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePlanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
