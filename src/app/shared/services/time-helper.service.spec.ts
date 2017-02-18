/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeHelperService } from './time-helper.service';

describe('TimeHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeHelperService]
    });
  });

  it('should ...', inject([TimeHelperService], (service: TimeHelperService) => {
    expect(service).toBeTruthy();
  }));
});
