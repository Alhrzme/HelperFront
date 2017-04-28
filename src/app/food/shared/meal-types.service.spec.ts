import { TestBed, inject } from '@angular/core/testing';

import { MealTypesService } from './meal-types.service';

describe('MealTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealTypesService]
    });
  });

  it('should ...', inject([MealTypesService], (service: MealTypesService) => {
    expect(service).toBeTruthy();
  }));
});
