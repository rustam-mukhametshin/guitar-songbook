import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { Observable } from 'rxjs';
import { Song } from '../../interfaces/Song';

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

    this.song$ = this.artistsService.getSong(id);
  }

}
