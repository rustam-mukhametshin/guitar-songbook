/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SharedModule } from '../../modules/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule,
  ]
})
export class SongsModule {
}
