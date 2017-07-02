import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {StoreComponent} from "./store.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";
import {StoreHomeComponent} from "../store-home/store-home.component";
import {ItemsComponent} from "./items/items.component";

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
                    },
                    {
                        path: 'items',
                        component: ItemsComponent
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
export class StoreRoutingModule {
}
