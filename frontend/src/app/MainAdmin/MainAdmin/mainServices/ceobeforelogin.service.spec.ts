import { TestBed } from '@angular/core/testing';

import { CeobeforeloginService } from './ceobeforelogin.service';

describe('CeobeforeloginService', () => {
  let service: CeobeforeloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeobeforeloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
