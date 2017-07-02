import { TestBed, inject } from '@angular/core/testing';

import { BuyItemService } from './buy-item.service';

describe('BuyItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyItemService]
    });
  });

  it('should be created', inject([BuyItemService], (service: BuyItemService) => {
    expect(service).toBeTruthy();
  }));
});
