import { TestBed } from '@angular/core/testing';

import { serviceService } from './service.service';

describe('serviceService', () => {
  let service: serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
