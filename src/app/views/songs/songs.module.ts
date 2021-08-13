/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';

import { SongsRoutingModule } from './songs-routing.module';
import { SharedModule } from '../../modules/shared.module';
import { SongsComponent } from './songs/songs.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongUpdateComponent } from './song-update/song-update.component';
import { SongFormComponent } from './song-form/song-form.component';

const components = [
  SongsComponent,
  SongCreateComponent,
  SongUpdateComponent,
  SongFormComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SongsRoutingModule,
    SharedModule,
  ]
})
export class SongsModule {
}
