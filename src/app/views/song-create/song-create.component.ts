import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChordNames } from '../../enums/ChordNames';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.scss'],
})
export class SongCreateComponent implements OnInit {

  artistId: string | number;

  // Song form
  songForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    initialPause: new FormControl('', [
      Validators.pattern('[0-9]*'),
      Validators.required,
    ]),
    duration: new FormControl('', [
      Validators.pattern('[0-9]*'),
      Validators.required,
    ]),
    chordNames: new FormControl('', []),
    commentsChords: new FormControl('', [])
  });

  // List of chords
  chordNames = Object.entries(ChordNames);

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
  }

  ngOnInit() {
  }

  save() {
    console.log(this.songForm.value);
  }
}
