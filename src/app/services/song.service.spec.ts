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

describe('SongService', () => {
  let service: SongService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(SongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('#addNewCustomSong should Add and save custom song', done => {
    done();
  });

  xit('#loadSavedSongs should Load saved songs', done => {
    done();
  });

  xit('#getSongsByArtistId should Get songs by artist id', done => {
    done();
  });

  xit('#getSong should Get single song', done => {
    done();
  });
});
