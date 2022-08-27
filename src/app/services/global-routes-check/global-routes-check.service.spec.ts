import { TestBed } from '@angular/core/testing';

import { GlobalRoutesCheckService } from './global-routes-check.service';

describe('GlobalRoutesCheckService', () => {
  let service: GlobalRoutesCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRoutesCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
