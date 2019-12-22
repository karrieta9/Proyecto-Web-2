import { TestBed } from '@angular/core/testing';

import { DatoNavService } from './dato-nav.service';

describe('DatoNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatoNavService = TestBed.get(DatoNavService);
    expect(service).toBeTruthy();
  });
});
