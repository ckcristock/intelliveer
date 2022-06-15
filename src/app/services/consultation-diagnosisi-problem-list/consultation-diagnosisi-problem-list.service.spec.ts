import { TestBed } from '@angular/core/testing';

import { ConsultationDiagnosisiProblemListService } from './consultation-diagnosisi-problem-list.service';

describe('ConsultationDiagnosisiProblemListService', () => {
  let service: ConsultationDiagnosisiProblemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationDiagnosisiProblemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
