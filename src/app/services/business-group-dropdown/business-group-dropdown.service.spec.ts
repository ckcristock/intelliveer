import { TestBed } from '@angular/core/testing';

import { BusinessGroupDropdownService } from './business-group-dropdown.service';

describe('BusinessGroupDropdownService', () => {
  let service: BusinessGroupDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessGroupDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
