import { TestBed } from '@angular/core/testing';

import { InsuranceSubscriberService } from './insurance-subscriber.service';

describe('InsuranceSubscriberService', () => {
  let service: InsuranceSubscriberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceSubscriberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
