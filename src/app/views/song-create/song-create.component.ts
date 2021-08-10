import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.scss'],
})
export class SongCreateComponent implements OnInit {

  artistId: string | number;

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
  }

  ngOnInit() {
  }

}
