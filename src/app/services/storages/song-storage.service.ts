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
import { first, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongStorageService {

  private readonly storageName = 'songs:custom';

  constructor(
    private readonly storageService: StorageService
  ) {
  }

  get(): Observable<Song[]> {
    return from(this.storageService.get(this.storageName))
      .pipe(
        first(),
        map(value => (JSON.parse(value.value) || []) as Song[])
      );
  }

  set(songs: Song[]) {
    // Todo: Check artist in storage

    // Save song
    this.storageService.set(this.storageName, JSON.stringify(songs));
  }
}
