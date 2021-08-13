/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SongComponent } from './views/song/song.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { ArtistsComponent } from './views/artists/artists/artists.component';
import { SongsComponent } from './views/songs/songs/songs.component';

const routes: Routes = [
  {
    path: 'artists',
    loadChildren: () => import('./views/artists/artist.module').then(m => m.ArtistModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./views/songs/songs.module').then(m => m.SongsModule)
  },
  {
    path: 'favourites',
    component: ArtistsComponent,
  },
  {
    path: 'customs',
    children: [
      {
        path: '',
        component: ArtistsComponent,
        pathMatch: 'full'
      },
      {
        path: ':artistId',
        component: SongsComponent,
      }
    ]
  },
  {
    path: 'song/:id',
    component: SongComponent,
  },
  {
    path: '',
    redirectTo: 'artists',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
