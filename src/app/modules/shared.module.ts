/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../pipes/search.pipe';

const pipes = [
  SearchPipe,
];

const modules = [
  CommonModule,
];

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...pipes,
  ]
})
export class SharedModule {
}
