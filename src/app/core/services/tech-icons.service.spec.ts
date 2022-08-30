import { TestBed } from '@angular/core/testing';

import { TechIconsService } from './tech-icons.service';

describe('TechIconsService', () => {
  let service: TechIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
