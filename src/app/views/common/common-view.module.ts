/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { LoaderComponent } from './loader/loader.component';

const components = [
  LoaderComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class CommonViewModule {
}
