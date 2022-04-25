import { TestBed } from '@angular/core/testing';

import { ContactPersonFormService } from './contact-person-form.service';

describe('ContactPersonFormService', () => {
  let service: ContactPersonFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPersonFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
