import { TestBed } from '@angular/core/testing';

import { PoleApiServiceService } from './pole-api-service.service';

describe('PoleApiServiceService', () => {
  let service: PoleApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoleApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
