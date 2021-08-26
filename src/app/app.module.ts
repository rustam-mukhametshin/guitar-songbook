/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './views/common/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './views/layout/sidebar/sidebar.component';
import { ArtistsComponent } from './views/artists/artists/artists.component';
import { SongComponent } from './views/song/song.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { SharedModule } from './modules/shared.module';
import { CoreModule } from './modules/core.module';
import { CommonViewModule } from './views/common/common-view.module';

const components = [
  SidebarComponent,
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
    CoreModule,
    AppRoutingModule,
    SharedModule,
    CommonViewModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
