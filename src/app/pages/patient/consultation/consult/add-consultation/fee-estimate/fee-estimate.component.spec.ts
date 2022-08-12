import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeEstimateComponent } from './fee-estimate.component';

describe('FeeEstimateComponent', () => {
  let component: FeeEstimateComponent;
  let fixture: ComponentFixture<FeeEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeEstimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
