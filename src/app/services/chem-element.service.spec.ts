import { TestBed } from '@angular/core/testing';

import { ChemElementService } from './chem-element.service';

describe('ChemElementService', () => {
  let service: ChemElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
