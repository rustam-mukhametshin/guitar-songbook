/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ArtistsService } from '../../../services/artists.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../../interfaces/Song';
import { Artist } from '../../../interfaces/Artist';
import { SongService } from '../../../services/song.service';
import { finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { LoaderService } from '../../../services/common/loader.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../common/popover/popover.component';


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
    private readonly songService: SongService,
    private readonly loaderService: LoaderService,
    public readonly popoverController: PopoverController
  ) {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }

  /**
   * Get list of songs
   * base on type
   *
   * @private
   */
  private get list(): Observable<Song[]> {
    switch (this.type) {
      case 'favourite':
        return this.songService.getSongsByArtistId(this.artistId);
      case 'custom':
        this.songService.loadSavedSongs();

        return this.songService.songsCustom$.pipe(
          map(songs => songs.filter(
              song => song.userId === Number.parseInt(this.artistId, 10)
            )
          )
        );
      default:
        return this.songService.getSongsByArtistId(this.artistId);
    }
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
   * Todo: Interface + property for `info menu`
   * Todo: Get Dynamic from module
   *
   * @param ev
   */
  showInfoMenu(ev: any) {
    const popover = this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: false,
      showBackdrop: false,
      componentProps: {
        values: [
          'Value',
          'Value2'
        ]
      }
    });
    from(popover)
      .pipe(
        switchMap(pop => pop.present()),
        take(1)
      ).subscribe();

  }

  /**
   * Get list of songs
   * base on type
   *
   * @private
   */
  private initList() {

    this.songs$ = this.list
      .pipe(
        tap(_ => {
          this.loaderService.show();
        }),
        finalize(() => {
          this.loaderService.hide();
        })
      )
    ;
  }

}
