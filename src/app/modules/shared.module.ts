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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuWrapperComponent } from '../views/common/menu-wrapper/menu-wrapper.component';

const pipes = [
  SearchPipe,
];

const components = [
  MenuWrapperComponent,
];

const modules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...pipes,
    ...components,
  ],
  imports: [
    ...modules,
    IonicModule.forRoot(),
  ],
  exports: [
    ...modules,
    ...pipes,
    ...components,
    IonicModule,
  ]
})
export class SharedModule {
}
