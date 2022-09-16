import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceGroupComponent } from './insurance-group.component';

describe('InsuranceGroupComponent', () => {
  let component: InsuranceGroupComponent;
  let fixture: ComponentFixture<InsuranceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
