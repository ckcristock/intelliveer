import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceGroupInformationComponent } from './insurance-group-information.component';

describe('InsuranceGroupInformationComponent', () => {
  let component: InsuranceGroupInformationComponent;
  let fixture: ComponentFixture<InsuranceGroupInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceGroupInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceGroupInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
