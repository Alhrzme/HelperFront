import { TestBed, inject } from '@angular/core/testing';

import { FoodScheduleService } from './food-schedule.service';

describe('FoodScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodScheduleService]
    });
  });

  it('should ...', inject([FoodScheduleService], (service: FoodScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
