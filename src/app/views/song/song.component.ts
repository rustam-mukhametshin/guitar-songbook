import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { Observable } from 'rxjs';
import { Song } from '../../interfaces/Song';
import { map, switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {

  song$: Observable<Song>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.song$ = this.getFromFetch().pipe(
      switchMap(val =>
        (this.artistsService.getSong(id)
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
