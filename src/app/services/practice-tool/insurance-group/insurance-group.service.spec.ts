import { TestBed } from '@angular/core/testing';

import { InsuranceGroupService } from './insurance-group.service';

describe('InsuranceGroupService', () => {
  let service: InsuranceGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
