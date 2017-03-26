/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeHelper } from './time-helper.service';

describe('TimeHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeHelper]
    });
  });

  it('should ...', inject([TimeHelper], (service: TimeHelper) => {
    expect(service).toBeTruthy();
  }));
});
