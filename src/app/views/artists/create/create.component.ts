/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  // Song form
  form: FormGroup;

  constructor() {
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
