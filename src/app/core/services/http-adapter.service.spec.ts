import { TestBed } from '@angular/core/testing';

import { HttpAdapterService } from './http-adapter.service';

describe('HttpAdapterService', () => {
  let service: HttpAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
