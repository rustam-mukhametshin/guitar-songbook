/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { ArtistsService } from './artists.service';
import { ArtistStorageService } from './storages/artist-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Artist } from '../interfaces/Artist';
import { Fake } from '../test/fake';
import { first } from 'rxjs/operators';

describe('ArtistsService', () => {
  let artistsService: ArtistsService;
  const artistsServiceSpy = jasmine.createSpyObj(ArtistsService, [
    'getArtists',
    'getArtist',
    'getCustoms',
    'setArtist'
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ArtistsService,
          useValue: artistsServiceSpy
        },
        ArtistStorageService,
        HttpClient
      ],
      imports: [
        HttpClientModule
      ]
    });
    artistsService = TestBed.inject(ArtistsService);
  });

  beforeEach(() => {
    artistsServiceSpy.getArtists.and.returnValue(of(Fake.artists));
    artistsServiceSpy.getArtist.and.callFake((arg: string | number) => of(Fake.artists[arg]));
    artistsServiceSpy.getCustoms.and.returnValue(of(Fake.artists));
    // TODO: Check saving and returning from storage
    artistsServiceSpy.setArtist.and.callFake((artist: Artist) => of(null));
  });

  it('should be created', () => {
    expect(artistsService).toBeTruthy();
  });

  it('#getArtists should return list of artists', done => {
    artistsService.getArtists()
      .pipe(first())
      .subscribe(c => {
        expect(c).toEqual(Fake.artists);
        done();
      });
  });

  it('#getArtist should return single artist', done => {
    const id = 0;
    const id2 = '1';
    artistsService.getArtist(id)
      .pipe(first())
      .subscribe(art => {
        expect(art).toEqual(Fake.artists[id]);
        done();
      });
    artistsService.getArtist(id2)
      .pipe(first())
      .subscribe(art => {
        expect(art).toEqual(Fake.artists[id2]);
        done();
      });
  });

  it('#getCustoms should return list of custom artists', done => {
    artistsService.getCustoms()
      .pipe(first())
      .subscribe(c => {
        expect(c).toEqual(Fake.artists);
        done();
      });
  });

  it('#setArtist should return null and save custom artist', done => {
    artistsService.setArtist(
      Fake.artists[0]
    )
      .pipe(first())
      .subscribe(c => {
        expect(c).toBeNull();
        // TODO: Check saving and returning from storage
        done();
      });
  });
});
