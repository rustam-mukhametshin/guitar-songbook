import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './views/artists/artists.component';
import { SongsComponent } from './views/songs/songs.component';
import { SongComponent } from './views/song/song.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { SongCreateComponent } from './views/song-create/song-create.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistsComponent,
  },
  {
    path: 'songs',
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
