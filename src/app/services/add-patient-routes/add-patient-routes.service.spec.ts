import { TestBed } from '@angular/core/testing';

import { AddPatientRoutesService } from './add-patient-routes.service';

describe('AddPatientRoutesService', () => {
  let service: AddPatientRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPatientRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
