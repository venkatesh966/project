import { TestBed } from '@angular/core/testing';

import { PlacesdetailsService } from './placesdetails.service';

describe('PlacesdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesdetailsService = TestBed.get(PlacesdetailsService);
    expect(service).toBeTruthy();
  });
});
