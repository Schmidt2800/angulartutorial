import { TestBed } from '@angular/core/testing';

import { HroService } from './hro.service';

describe('HroService', () => {
  let service: HroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
