import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPartyComponent } from './payment-party.component';

describe('PaymentPartyComponent', () => {
  let component: PaymentPartyComponent;
  let fixture: ComponentFixture<PaymentPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
