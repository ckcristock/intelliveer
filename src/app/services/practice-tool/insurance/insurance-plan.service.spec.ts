import { TestBed } from '@angular/core/testing';

import { InsurancePlanService } from './insurance-plan.service';

describe('InsurancePlanService', () => {
  let service: InsurancePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
