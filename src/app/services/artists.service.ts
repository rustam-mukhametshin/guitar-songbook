/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Artist } from '../interfaces/Artist';
import { ArtistStorageService } from './storages/artist-storage.service';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly artistStorageService: ArtistStorageService
  ) {
  }

  /**
   * Get list of artists from API
   */
  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiUrl + '/users/');
  }

  /**
   * Get single artist from API
   *
   * @param id
   */
  getArtist(id: number | string): Observable<Artist> {
    return this.httpClient.get<Artist>(this.apiUrl + '/users/' + id)
      .pipe(
        shareReplay()
      )
      ;
  }

  /**
   * Get list of custom artists
   */
  getCustoms(): Observable<Artist[]> {
    return this.artistStorageService.get();
  }

  /**
   * Save new artist to `custom`
   *
   * @param artist
   */
  setArtist(artist: Artist): Observable<void> {
    return this.artistStorageService.setArtist(artist);
  }
}
