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
import { PopoverComponent } from './popover/popover.component';

const components = [
  LoaderComponent,
  PopoverComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    SharedModule,
  ]
})
export class CommonViewModule {
}
