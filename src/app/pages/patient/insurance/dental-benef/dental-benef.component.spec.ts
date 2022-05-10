import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalBenefComponent } from './dental-benef.component';

describe('DentalBenefComponent', () => {
  let component: DentalBenefComponent;
  let fixture: ComponentFixture<DentalBenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalBenefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
