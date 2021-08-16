/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { Song } from '../interfaces/Song';
import { v4 as uid } from 'uuid';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SongStorageService } from './storages/song-storage.service';
import { ArtistStorageService } from './storages/artist-storage.service';
import { Artist } from '../interfaces/Artist';
import { ArtistsService } from './artists.service';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  readonly songsCustom: Song[] = [];

  readonly songCustomSubj$: Subject<Song[]> = new BehaviorSubject([]);
  readonly songsCustom$: Observable<Song[]> = this.songCustomSubj$.asObservable();

  constructor(
    private readonly songStorageService: SongStorageService,
    private readonly artistStorageService: ArtistStorageService,
    private readonly artistsService: ArtistsService,
    private readonly httpClient: HttpClient,
  ) {
  }

  /**
   * Add and save custom song
   *
   * @param value
   * @param artistId
   */
  addNewCustomSong(value: Song, artistId: number = 0): Observable<void> {
    const song: Song = {
      title: value.title,
      body: '', // Todo,
      duration: value.duration,
      initialPause: value.initialPause,

      id: uid(),
      userId: artistId,
      comments: value.comments,
      isCustom: true,
      isFavourite: false
    };

    this.songsCustom.unshift(song);

    const artist: Artist = this.artistStorageService.getArtist(artistId);

    if (!artist) {
      this.artistsService.getArtist(artistId)
        .pipe(
          take(1)
        )
        .subscribe(a => {
          this.artistStorageService.setArtist(a);
        });
    }

    return this.songStorageService.set(this.songsCustom);
  }

  /**
   * Load saved songs
   *
   */
  loadSavedSongs(): void {
    this.songStorageService.get()
      .pipe(
        take(1)
      )
      .subscribe((songs) => this.songCustomSubj$.next(songs));
  }

  /**
   * Get songs by artist id
   *
   * @param userId
   */
  getSongsByArtistId(userId: number | string): Observable<Song[]> {
    return this.httpClient.get<Song[]>(environment.apiUrl + '/posts?userId=' + userId);
  }
}
