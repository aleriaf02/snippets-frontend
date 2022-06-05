import { TestBed } from '@angular/core/testing';

import { HandleErrorServiceService } from './handle-error-service.service';

describe('HandleErrorServiceService', () => {
  let service: HandleErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
