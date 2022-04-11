import { TestBed } from '@angular/core/testing';

import { BusinessGroupService } from './business-group.service';

describe('BusinessGroupService', () => {
  let service: BusinessGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
