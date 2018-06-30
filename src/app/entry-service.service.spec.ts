import { TestBed, inject } from '@angular/core/testing';

import { EntryServiceService } from './entry-service.service';

describe('EntryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryServiceService]
    });
  });

  it('should be created', inject([EntryServiceService], (service: EntryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
