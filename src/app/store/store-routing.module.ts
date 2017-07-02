import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {StoreComponent} from "./store.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";
import {StoreHomeComponent} from "../store-home/store-home.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: StoreHomeComponent
          }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class StoreRoutingModule { }
