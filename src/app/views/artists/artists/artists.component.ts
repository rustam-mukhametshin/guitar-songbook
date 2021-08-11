/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../../services/artists.service';
import { Observable } from 'rxjs';
import { Artist } from '../../../interfaces/Artist';
import { ActivatedRoute } from '@angular/router';

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

  private readonly type: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private artistsService: ArtistsService
  ) {
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }

  ngOnInit() {
    this.initArtistList();
  }

  /**
   * Get list of artist base on type
   *
   * Todo: change list
   *
   * @private
   */
  private initArtistList() {
    switch (this.type) {
      case 'favourite':
        this.artists$ = this.artistsService.getArtists();
        break;
      case 'custom':
        this.artists$ = this.artistsService.getArtists();
        break;
      default:
        this.artists$ = this.artistsService.getArtists();
        break;
    }
  }

}
