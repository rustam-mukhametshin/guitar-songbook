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

@Injectable({
  providedIn: 'root'
})
export class SongService {

  readonly songsCustom: Song[] = [];

  readonly songSubj$: Subject<Song[]> = new BehaviorSubject([]);
  readonly songs$: Observable<Song[]> = this.songSubj$.asObservable();

  private readonly songsStorage = 'songs:custom';

  constructor(
    private readonly songStorageService: SongStorageService
  ) {
  }

  /**
   * Add and save custom song
   *
   * @param value
   * @param artistId
   */
  addNewCustomSong(value: Song, artistId: number = 0): void {
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

    this.songStorageService.set(this.songsCustom);
  }

  /**
   * Load saved songs
   *
   */
  loadSavedSongs(): void {
    this.songStorageService.get()
      .subscribe((songs) => this.songSubj$.next(songs));
  }
}
