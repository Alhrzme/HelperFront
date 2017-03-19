import { TestBed, inject } from '@angular/core/testing';

import { ListenersService } from './listeners.service';

describe('ListenersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListenersService]
    });
  });

  it('should ...', inject([ListenersService], (service: ListenersService) => {
    expect(service).toBeTruthy();
  }));
});
