import { TestBed } from '@angular/core/testing';

import { FindUserGitService } from './find-user-git.service';

describe('FindUserGitService', () => {
  let service: FindUserGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindUserGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
