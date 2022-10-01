import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOption1Component } from './payment-option1.component';

describe('PaymentOption1Component', () => {
  let component: PaymentOption1Component;
  let fixture: ComponentFixture<PaymentOption1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOption1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
