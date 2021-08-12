/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { ArtistStorageService } from './artist-storage.service';

describe('ArtistStorageService', () => {
  let service: ArtistStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
