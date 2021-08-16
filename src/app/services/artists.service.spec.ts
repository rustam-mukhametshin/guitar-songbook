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
    'getArtists'
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
      }
    ] as Artist[];
    fake2 = [
      {
        id: 1,
        name: 'test3',
      },
      {
        id: 2,
        name: 'test2',
      }
    ] as Artist[];

    artistsServiceSpy.getArtists.and.returnValue(of(fake));
  });

  it('should be created', () => {
    expect(artistsService).toBeTruthy();
  });

  it('#getArtists should return list of artists', done => {
    artistsService.getArtists()
      .pipe(
        first()
      )
      .subscribe(c => {
        expect(c).toEqual(fake);
        done();
      });
  });
});
