import { TestBed, inject } from '@angular/core/testing';

import { ItemEntryService } from './item-entry.service';

describe('ItemEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemEntryService]
    });
  });

  it('should be created', inject([ItemEntryService], (service: ItemEntryService) => {
    expect(service).toBeTruthy();
  }));
});
