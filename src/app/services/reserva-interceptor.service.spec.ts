import { TestBed } from '@angular/core/testing';

import { ReservaInterceptorService } from './reserva-interceptor.service';

describe('ReservaInterceptorService', () => {
  let service: ReservaInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
