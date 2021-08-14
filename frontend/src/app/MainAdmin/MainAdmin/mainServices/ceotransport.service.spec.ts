import { TestBed } from '@angular/core/testing';

import { CeotransportService } from './ceotransport.service';

describe('CeotransportService', () => {
  let service: CeotransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeotransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
