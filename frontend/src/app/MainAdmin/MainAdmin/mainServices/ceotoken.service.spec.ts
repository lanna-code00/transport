import { TestBed } from '@angular/core/testing';

import { CeotokenService } from './ceotoken.service';

describe('CeotokenService', () => {
  let service: CeotokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeotokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
