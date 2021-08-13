/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistsService } from '../../../services/artists.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  // Song form
  form: FormGroup;

  constructor(
    private readonly artistsService: ArtistsService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    // Set song form
    this.form = this.setForm();
  }

  /**
   * Save artist
   *
   * Todo
   */
  save() {
    this.artistsService
      .setArtist(this.form.value)
      .pipe(
        take(1)
      )
      .subscribe(_ => {
        this.router.navigate(['/customs'],
          {
            queryParams: {
              type: 'custom'
            }
          }
        );
      })
    ;
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
    });
  }
}
