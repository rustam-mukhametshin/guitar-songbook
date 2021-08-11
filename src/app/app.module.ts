/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './views/layout/sidebar/sidebar.component';
import { NavComponent } from './views/layout/nav/nav.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { SongComponent } from './views/song/song.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { SharedModule } from './modules/shared.module';

const components = [
  SidebarComponent,
  NavComponent,
  ArtistsComponent,
  SongComponent,
  NotFoundPageComponent,
];


@NgModule({
  declarations: [
    AppComponent,
    ...components,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
