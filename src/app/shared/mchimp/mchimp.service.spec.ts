/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MchimpService } from './mchimp.service';

describe('MchimpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MchimpService]
    });
  });

  it('should ...', inject([MchimpService], (service: MchimpService) => {
    expect(service).toBeTruthy();
  }));
});
