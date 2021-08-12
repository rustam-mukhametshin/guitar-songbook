/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { first, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  get(): Observable<Artist[]> {
    return from(this.storageService.get(this.storageName))
      .pipe(
        first(),
        map(value => (JSON.parse(value.value) || []) as Artist[])
      );
  }
}
