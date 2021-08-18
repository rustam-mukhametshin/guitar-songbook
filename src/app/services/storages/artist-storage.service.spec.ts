/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { ArtistStorageService } from './artist-storage.service';
import { Artist } from '../../interfaces/Artist';
import { of } from 'rxjs';
import { Fake, Fake2 } from '../../test/fake';
import SpyObj = jasmine.SpyObj;


describe('ArtistStorageService', () => {
  let service: ArtistStorageService;
  const artistStorageServiceSpy = jasmine.createSpyObj('ArtistStorageService', [
    'get',
    'getArtist'
  ]) as SpyObj<ArtistStorageService>;

  let fake: Artist[];
  let fake2: Artist[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ArtistStorageService,
          useValue: artistStorageServiceSpy
        }
      ]
    });
    service = TestBed.inject(ArtistStorageService);
  });

  beforeEach(() => {
    fake = Fake.artists;
    fake2 = Fake2.artists;

    artistStorageServiceSpy.get.and.returnValue(of(fake));
    artistStorageServiceSpy.getArtist.and.callFake(id => of(fake.filter(art => art.id === id)[0]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#get should get all songs from storage', done => {
    artistStorageServiceSpy.get()
      .subscribe(v => {
        expect(v).toEqual(fake);
        done();
      });
  });

  it('#getArtist should return one artist by id', done => {
    service.getArtist(1)
      .subscribe(v => {
        expect(v).toEqual(fake[0]);
        done();
      });
  });
});
