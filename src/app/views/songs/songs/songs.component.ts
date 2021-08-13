/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsService } from '../../../services/artists.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../../interfaces/Song';
import { Artist } from '../../../interfaces/Artist';
import { SongService } from '../../../services/song.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  songs$: Observable<Song[]>;
  artist$: Observable<Artist>;

  // Search
  showSearch = false;
  searchText: string;

  private readonly type: string;
  private readonly artistId: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService,
    private readonly songService: SongService
  ) {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }

  ngOnInit() {

    // Get list
    this.initList();

    // Get artist
    this.artist$ = this.artistsService.getArtist(this.artistId);
  }

  addToFavourite(id: number | string) {

  }

  removeFromFavourite(id: number | string) {

  }

  /**
   * Get list of songs
   * base on type
   *
   * @private
   */
  private initList() {
    switch (this.type) {
      case 'favourite':
        // Todo
        this.songs$ = this.artistsService.getPostsByUserId(this.artistId);
        break;
      case 'custom':
        this.songService.loadSavedSongs();

        this.songs$ = this.songService.songsCustom$.pipe(
          map(songs => songs.filter(
              song => song.userId === Number.parseInt(this.artistId, 10)
            )
          )
        );
        break;
      default:
        this.songs$ = this.artistsService.getPostsByUserId(this.artistId);
        break;
    }
  }

}
