import {TestBed} from '@angular/core/testing';

import {PermissionsHelperService} from './permissions-helper.service';

describe('PermissionsHelperService', () => {
  let service: PermissionsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
