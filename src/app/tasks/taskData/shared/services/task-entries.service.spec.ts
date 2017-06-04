import { TestBed, inject } from '@angular/core/testing';

import { TaskEntriesService } from './task-entries.service';

describe('TaskEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskEntriesService]
    });
  });

  it('should be created', inject([TaskEntriesService], (service: TaskEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
