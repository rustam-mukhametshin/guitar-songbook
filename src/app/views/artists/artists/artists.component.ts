/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../../services/artists.service';
import { finalize, Observable, tap } from 'rxjs';
import { Artist } from '../../../interfaces/Artist';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../services/common/loader.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {

  labels = [
    {title: 'Search', url: '/folder/Inbox', icon: 'search'},
    {title: 'Reload', url: '/folder/Favorites', icon: 'reload'},
    {title: 'Submenu', url: '/folder/Favorites', icon: 'ellipsis-vertical'},
  ];
  artists$: Observable<Artist[]>;

  type: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService,
    private readonly loaderService: LoaderService
  ) {
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }

  /**
   * Get list of artist base on type
   *
   * @private
   */
  private get list(): Observable<Artist[]> {
    switch (this.type) {
      case 'favourite':
        return this.artistsService.getArtists();
      case 'custom':
        return this.artistsService.getCustoms();
      default:
        return this.artistsService.getArtists();
    }
  }

  ngOnInit() {
    this.initList();
  }

  /**
   * @private
   */
  private initList() {
    this.artists$ = this.list
      .pipe(
        tap(_ => {
          this.loaderService.show();
        }),
        finalize(() => {
          this.loaderService.hide();
        })
      );

  }

}
