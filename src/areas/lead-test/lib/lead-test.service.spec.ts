import { TestBed, inject } from '@angular/core/testing';

import { LeadTestService } from './lead-test.service';

describe('LeadTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadTestService]
    });
  });

  it('should be created', inject([LeadTestService], (service: LeadTestService) => {
    expect(service).toBeTruthy();
  }));
});
