import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './views/layout/sidebar/sidebar.component';
import { NavComponent } from './views/layout/nav/nav.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { HttpClientModule } from '@angular/common/http';
import { SongsComponent } from './views/songs/songs.component';
import { SongComponent } from './views/song/song.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { SearchPipe } from './pipes/search.pipe';
import { SongFormComponent } from './views/song-form/song-form.component';
import { SongCreateComponent } from './views/song-create/song-create.component';
import { SongUpdateComponent } from './views/song-update/song-update.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  SidebarComponent,
  NavComponent,
  ArtistsComponent,
  SongsComponent,
  SongComponent,
  NotFoundPageComponent,
  SongFormComponent,
  SongCreateComponent,
  SongUpdateComponent,
];

const pipes = [
  SearchPipe,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pipes,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
