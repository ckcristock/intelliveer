import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlanProfileFormComponent } from './insurance-plan-profile-form.component';

describe('InsurancePlanProfileFormComponent', () => {
  let component: InsurancePlanProfileFormComponent;
  let fixture: ComponentFixture<InsurancePlanProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePlanProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlanProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
