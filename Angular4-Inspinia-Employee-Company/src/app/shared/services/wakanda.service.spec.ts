import { TestBed, inject } from '@angular/core/testing';

import { WakandaService } from './wakanda.service';

describe('WakandaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WakandaService]
    });
  });

  it('should ...', inject([WakandaService], (service: WakandaService) => {
    expect(service).toBeTruthy();
  }));
});
