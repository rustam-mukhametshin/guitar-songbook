import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsService } from '../../services/artists.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../interfaces/Song';
import { Artist } from '../../interfaces/Artist';

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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistsService: ArtistsService
  ) {
  }

  ngOnInit() {
    const artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
    this.songs$ = this.artistsService.getPostsByUserId(artistId);
    this.artist$ = this.artistsService.getArtist(artistId);
  }

  addToFavourite(id: number | string) {

  }

  removeFromFavourite(id: number | string) {

  }

}
