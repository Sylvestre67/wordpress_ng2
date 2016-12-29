/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParentSlugService } from './parent-slug.service';

describe('ParentSlugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentSlugService]
    });
  });

  it('should ...', inject([ParentSlugService], (service: ParentSlugService) => {
    expect(service).toBeTruthy();
  }));
});
