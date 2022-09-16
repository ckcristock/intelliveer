import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceGroupInformationFormComponent } from './insurance-group-information-form.component';

describe('InsuranceGroupInformationFormComponent', () => {
  let component: InsuranceGroupInformationFormComponent;
  let fixture: ComponentFixture<InsuranceGroupInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceGroupInformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceGroupInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
