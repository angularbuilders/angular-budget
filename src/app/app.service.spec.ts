import { TestBed } from '@angular/core/testing';
import { AppFacadeService } from './app-facade.service';

describe('AppService', () => {
  let service: AppFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
