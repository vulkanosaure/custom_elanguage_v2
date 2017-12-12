import { TestBed, inject } from '@angular/core/testing';

import { StatsEffectService } from './stats-effect.service';

describe('StatsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsEffectService]
    });
  });

  it('should be created', inject([StatsEffectService], (service: StatsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
