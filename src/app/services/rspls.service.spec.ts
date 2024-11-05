import { TestBed } from '@angular/core/testing';

import { RsplsService } from './rspls.service';

describe('RsplsService', () => {
  let service: RsplsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsplsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
