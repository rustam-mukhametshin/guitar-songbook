/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';

import { ArtistRoutingModule } from './artist-routing.module';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../../modules/shared.module';

const components = [
  CreateComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule {
}
