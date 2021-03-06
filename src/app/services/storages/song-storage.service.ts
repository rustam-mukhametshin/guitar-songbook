/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { Song } from '../../interfaces/Song';
import { StorageService } from './storage.service';
import { from, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongStorageService {

  private readonly storageName = 'songs:custom';

  constructor(
    private readonly storageService: StorageService,
  ) {
  }

  /**
   * Get all songs
   */
  get(): Observable<Song[]> {
    return from(this.storageService.get(this.storageName))
      .pipe(
        first(),
        map(value => (JSON.parse(value.value) || []) as Song[])
      );
  }

  /**
   * Save songs
   *
   * @param songs
   */
  set(songs: Song[]): Observable<void> {
    return from(this.storageService.set(this.storageName, JSON.stringify(songs)));
  }
}
