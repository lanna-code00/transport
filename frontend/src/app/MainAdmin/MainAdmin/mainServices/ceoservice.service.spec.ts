import { TestBed } from '@angular/core/testing';

import { CeoserviceService } from './ceoservice.service';

describe('CeoserviceService', () => {
  let service: CeoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
