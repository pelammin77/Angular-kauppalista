import { TestBed, inject } from '@angular/core/testing';

import { TuoteService } from './tuote.service';

describe('TuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuoteService]
    });
  });

  it('should ...', inject([TuoteService], (service: TuoteService) => {
    expect(service).toBeTruthy();
  }));
});
