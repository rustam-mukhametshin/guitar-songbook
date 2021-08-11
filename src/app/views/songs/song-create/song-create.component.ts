/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChordNames } from '../../enums/ChordNames';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.scss'],
})
export class SongCreateComponent implements OnInit {

  artistId: string | number;

  // Song form
  songForm: FormGroup;

  // List of chords
  chordNames: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly songService: SongService
  ) {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('artistId');
  }

  ngOnInit() {
    // Set song form
    this.songForm = this.setForm();

    // Set list of chords
    this.chordNames = Object.entries(ChordNames);
  }

  /**
   * Save custom song
   */
  save() {
    if (typeof this.artistId === 'string') {
      this.artistId = parseInt(this.artistId, 10);
    }

    this.songService.addNewCustomSong(this.songForm.value, this.artistId);
  }

  /**
   * Set form
   *
   * @private
   */
  private setForm(): FormGroup {
    return new FormGroup({
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
  }
}
