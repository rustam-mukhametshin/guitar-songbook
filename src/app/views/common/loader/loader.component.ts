/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/common/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  constructor(
    readonly loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.loaderService.show();
  }

}
