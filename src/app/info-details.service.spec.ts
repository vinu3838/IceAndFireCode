import { TestBed, inject } from '@angular/core/testing';

import { InfoDetailsService } from './info-details.service';

describe('InfoDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoDetailsService]
    });
  });

  it('should be created', inject([InfoDetailsService], (service: InfoDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
