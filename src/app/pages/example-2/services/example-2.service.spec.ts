import { TestBed } from '@angular/core/testing';

import { Example2Service } from './example-2.service';

describe('Example2Service', () => {
  let service: Example2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
