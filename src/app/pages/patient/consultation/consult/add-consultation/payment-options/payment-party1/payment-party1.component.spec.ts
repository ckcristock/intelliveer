import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentParty1Component } from './payment-party1.component';

describe('PaymentParty1Component', () => {
  let component: PaymentParty1Component;
  let fixture: ComponentFixture<PaymentParty1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentParty1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentParty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
