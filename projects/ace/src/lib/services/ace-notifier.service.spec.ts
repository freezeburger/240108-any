import { TestBed } from '@angular/core/testing';

import { AceNotifierService } from './ace-notifier.service';

describe('AceNotifierService', () => {
  let service: AceNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AceNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
