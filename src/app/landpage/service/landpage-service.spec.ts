import { TestBed } from '@angular/core/testing';

import { LandpageService } from './landpage-service';

describe('LandpageService', () => {
  let service: LandpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
