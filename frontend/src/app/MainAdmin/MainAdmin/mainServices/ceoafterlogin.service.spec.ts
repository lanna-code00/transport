import { TestBed } from '@angular/core/testing';

import { CeoafterloginService } from './ceoafterlogin.service';

describe('CeoafterloginService', () => {
  let service: CeoafterloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeoafterloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
