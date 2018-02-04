import { TestBed, inject } from '@angular/core/testing';

import { LivesearchService } from './livesearch.service';

describe('LivesearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivesearchService]
    });
  });

  it('should be created', inject([LivesearchService], (service: LivesearchService) => {
    expect(service).toBeTruthy();
  }));
});
