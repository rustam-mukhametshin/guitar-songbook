/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SongCreateComponent } from '../song-create/song-create.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':artistId',
        component: SongsComponent,
      },
      {
        path: 'create/:artistId',
        component: SongCreateComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ':artistId'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule {
}
