/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { from, Observable, switchMap } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Artist } from '../../interfaces/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistStorageService {

  private readonly storageName = 'artists';

  constructor(
    private readonly storageService: StorageService
  ) {
  }

  /**
   * Get list of artists in obs$
   */
  get(): Observable<Artist[]> {
    return from(this.storageService.get(this.storageName))
      .pipe(
        map(value => (JSON.parse(value.value) || []) as Artist[])
      );
  }

  /**
   * Get artist
   *
   * @param id
   */
  getArtist(id: string | number): Artist | null {
    let artist: Artist = null;
    this.get()
      .pipe(
        take(1),
        map((artists) => artists.filter(a => a.id === id))
      )
      .subscribe(artists => {
        if (artists.length > 0) {
          artist = artists[0];
        }
      });

    return artist;
  }

  /**
   * Save list of artists
   *
   * @param artists
   */
  set(artists: Artist[]): Observable<void> {
    return from(this.storageService.set(this.storageName, JSON.stringify(artists)));
  }

  /**
   * Save artist
   *
   * @param artist
   */
  setArtist(artist: Artist): Observable<void> {
    return this.get()
      .pipe(
        take(1),
        switchMap(artists => {
          const arts: Artist[] = artists;
          arts.push(artist);
          return this.set(arts);
        })
      );
  }
}
