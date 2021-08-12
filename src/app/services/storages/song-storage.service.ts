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

@Injectable({
  providedIn: 'root'
})
export class SongStorageService {

  private readonly songsStorage = 'songs:custom';

  constructor(
    private readonly storageService: StorageService
  ) {
  }

  set(songs: Song[]) {
    // Todo: Check artist in storage

    // Save song
    this.storageService.set(this.songsStorage, JSON.stringify(songs));
  }
}
