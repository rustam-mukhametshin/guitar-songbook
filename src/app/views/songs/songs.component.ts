import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsService, Post } from '../../services/artists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  songs$: Observable<Post[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService
  ) {
  }

  ngOnInit() {
    const artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
    this.songs$ = this.artistsService.getPostsByUserId(artistId);
  }

}
