import { TestBed } from '@angular/core/testing';

import { CallersInfoService } from './callers-info.service';

describe('CallersInfoService', () => {
  let service: CallersInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallersInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
