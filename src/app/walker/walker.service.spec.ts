import { TestBed, inject } from '@angular/core/testing';

import { WalkerService } from './walker.service';

describe('WalkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalkerService]
    });
  });

  it('should be created', inject([WalkerService], (service: WalkerService) => {
    expect(service).toBeTruthy();
  }));
});
