import { TestBed, inject } from '@angular/core/testing';

import { SchooDetailsService } from './school-details.service';

describe('SchooDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchooDetailsService]
    });
  });

  it('should be created', inject([SchooDetailsService], (service: SchooDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
