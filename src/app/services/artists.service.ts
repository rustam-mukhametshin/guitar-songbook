import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Artist } from '../interfaces/Artist';
import { Song } from '../interfaces/Song';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiUrl + '/users/');
  }

  getArtist(id: number | string): Observable<Artist> {
    return this.httpClient.get<Artist>(this.apiUrl + '/users/' + id);
  }

  getPostsByUserId(userId: number | string): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.apiUrl + '/posts?userId=' + userId);
  }

  getSong(id: number | string): Observable<Song> {
    return this.httpClient.get<Song>(this.apiUrl + '/posts/' + id);
  }
}
