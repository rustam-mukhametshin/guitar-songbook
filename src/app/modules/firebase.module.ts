/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AngularFireModule,
  ]
})
export class FirebaseModule {
}
