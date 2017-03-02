/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepetitiveTasksService } from './repetitive-tasks.service';

describe('RepetitiveTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepetitiveTasksService]
    });
  });

  it('should ...', inject([RepetitiveTasksService], (service: RepetitiveTasksService) => {
    expect(service).toBeTruthy();
  }));
});
