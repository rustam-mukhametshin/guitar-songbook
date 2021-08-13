/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { SongStorageService } from './song-storage.service';

xdescribe('SongStorageService', () => {
  let service: SongStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
