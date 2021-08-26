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
import { LoaderService } from '../../../services/common/loader.service';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {

  artists$: Observable<Artist[]>;

  type: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService,
    private readonly loaderService: LoaderService
  ) {
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }

  ngOnInit() {
    this.initList();
  }

  /**
   * @private
   */
  private initList() {
    this.artists$ = this.artistsService.getAll(this.type)
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
