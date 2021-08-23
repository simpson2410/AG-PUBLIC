import { TestBed } from '@angular/core/testing';

import { PtypeService } from './ptype.service';

describe('PtypeService', () => {
  let service: PtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
