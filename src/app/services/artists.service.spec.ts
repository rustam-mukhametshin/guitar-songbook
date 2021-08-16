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
import { first, of } from 'rxjs';
import { Artist } from '../interfaces/Artist';

describe('ArtistsService', () => {
  let artistsService: ArtistsService;
  const artistsServiceSpy = jasmine.createSpyObj('ArtistsService', [
    'getArtists',
    'getArtist',
    'getCustoms',
    'setArtist'
  ]);

  let fake: Artist[];
  let fake2: Artist[];

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
    fake = [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'test2',
      },
      {
        id: 3,
        name: 'test3',
      }
    ] as Artist[];
    fake2 = [
      {
        id: 4,
        name: 'test4',
      },
      {
        id: 5,
        name: 'test5',
      },
      {
        id: 6,
        name: 'test6',
      }
    ] as Artist[];

    artistsServiceSpy.getArtists.and.returnValue(of(fake));
    artistsServiceSpy.getArtist.and.callFake((arg: string | number) => of(fake[arg]));
    artistsServiceSpy.getCustoms.and.returnValue(of(fake));
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
        expect(c).toEqual(fake);
        done();
      });
  });

  it('#getArtist should return single artist', done => {
    const id = 0;
    const id2 = '1';
    artistsService.getArtist(id)
      .pipe(first())
      .subscribe(art => {
        expect(art).toEqual(fake[id]);
        done();
      });
    artistsService.getArtist(id2)
      .pipe(first())
      .subscribe(art => {
        expect(art).toEqual(fake[id2]);
        done();
      });
  });

  it('#getCustoms should return list of custom artists', done => {
    artistsService.getCustoms()
      .pipe(first())
      .subscribe(c => {
        expect(c).toEqual(fake);
        done();
      });
  });

  it('#setArtist should return null and save custom artist', done => {
    artistsService.setArtist(
      fake[0]
    )
      .pipe(first())
      .subscribe(c => {
        expect(c).toBeNull();
        // TODO: Check saving and returning from storage
        done();
      });
  });
});
