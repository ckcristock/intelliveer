import { TestBed } from '@angular/core/testing';

import { PatientUserService } from './patient-user.service';

describe('PatientUserService', () => {
  let service: PatientUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
