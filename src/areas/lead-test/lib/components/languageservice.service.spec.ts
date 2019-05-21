import { TestBed, inject } from '@angular/core/testing';

import { LanguageserviceService } from './languageservice.service';

describe('LanguageserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageserviceService]
    });
  });

  it('should be created', inject([LanguageserviceService], (service: LanguageserviceService) => {
    expect(service).toBeTruthy();
  }));
});
