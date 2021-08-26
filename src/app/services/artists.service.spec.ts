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
import { Fake, Fake2 } from '../test/fake';
import { first } from 'rxjs/operators';
import SpyObj = jasmine.SpyObj;

describe('ArtistsService', () => {
  let artistsService: ArtistsService;
  const artistsServiceSpy = jasmine.createSpyObj(ArtistsService, [
    'getArtists',
    'getAll',
    'getArtist',
    'getCustoms',
    'setArtist'
  ]) as SpyObj<ArtistsService>;

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

    artistsServiceSpy.getAll.and.callFake((type: string) => {
      switch (type) {
        case 'favourite':
          // Todo: in work
          return of(Fake.artists);
        case 'custom':
          // Todo: return from storage
          return of(Fake2.artists);
        default:
          return of(Fake.artists);
      }
    });
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

  it('#getAll should return artists by type', done => {
    artistsService.getAll('favourite')
      .pipe(first())
      .subscribe(a => {
        expect(a).toEqual(Fake.artists);
        done();
      });

    artistsService.getAll('custom')
      .pipe(first())
      .subscribe(a => {
        expect(a).toEqual(Fake2.artists);
        done();
      });

    artistsService.getAll()
      .pipe(first())
      .subscribe(a => {
        expect(a).toEqual(Fake.artists);
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
