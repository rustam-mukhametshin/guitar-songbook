/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';


@NgModule({
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ]
})
export class CoreModule {
}
