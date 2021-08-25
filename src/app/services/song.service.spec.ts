/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { SongService } from './song.service';
import { HttpClientModule } from '@angular/common/http';
import { SongStorageService } from './storages/song-storage.service';
import { of } from 'rxjs';
import { Fake } from '../test/fake';
import { first, take } from 'rxjs/operators';

describe('SongService', () => {
  let service: SongService;
  let storage: SongStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(SongService);
    storage = TestBed.inject(SongStorageService);
  });

  beforeEach(() => {
    // Fake for storage
    spyOn(storage, 'get').and.returnValue(of(Fake.songs));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('#addNewCustomSong should Add and save custom song', done => {
    done();
  });

  it('#loadSavedSongs should Load saved songs', done => {
    service.songsCustom$
      .pipe(take(1))
      .subscribe(v => {
        expect(v).toEqual([]);
        done();
      });

    service.loadSavedSongs();

    service.songsCustom$
      .pipe(first())
      .subscribe(v => {
        expect(v).toEqual(Fake.songs);
        done();
      });

  });

  xit('#getSongsByArtistId should Get songs by artist id', done => {
    done();
  });

  xit('#getSong should Get single song', done => {
    done();
  });
});
