/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { Artist } from '../interfaces/Artist';
import { Song } from '../interfaces/Song';
import { ArtistStorageService } from './storages/artist-storage.service';

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

  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiUrl + '/users/');
  }

  getArtist(id: number | string): Observable<Artist> {
    return this.httpClient.get<Artist>(this.apiUrl + '/users/' + id)
      .pipe(
        shareReplay()
      )
      ;
  }

  getPostsByUserId(userId: number | string): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.apiUrl + '/posts?userId=' + userId);
  }

  getSong(id: number | string): Observable<Song> {
    return this.httpClient.get<Song>(this.apiUrl + '/posts/' + id);
  }

  /**
   * Get list of custom artists
   */
  getCustoms(): Observable<Artist[]> {
    return this.artistStorageService.get();
  }
}
