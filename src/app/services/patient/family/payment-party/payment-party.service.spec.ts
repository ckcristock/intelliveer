import { TestBed } from '@angular/core/testing';

import { PaymentPartyService } from './payment-party.service';

describe('PaymentPartyService', () => {
  let service: PaymentPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
