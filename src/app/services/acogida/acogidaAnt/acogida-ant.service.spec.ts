import { TestBed } from '@angular/core/testing';

import { AcogidaAntService } from './acogida-ant.service';

describe('AcogidaAntService', () => {
  let service: AcogidaAntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcogidaAntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
