/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '../../interfaces/Song';
import { map, switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {

  song$: Observable<Song>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly songService: SongService
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.song$ = this.getFromFetch().pipe(
      switchMap(val =>
        (this.songService.getSong(id)
          .pipe(map(value => ({...value, ...{body: val}} as Song))))
      )
    );
  }

  getFromFetch() {
    return fromFetch('./assets/placeholder.txt', {
      selector: response => response.text()
    });
  }
}
