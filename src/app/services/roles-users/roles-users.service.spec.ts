import { TestBed } from '@angular/core/testing';

import { RolesUsersService } from './roles-users.service';

describe('RolesUsersService', () => {
  let service: RolesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
