import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ListenersComponent} from "./listeners.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'listeners',
                component: ListenersComponent,
                canActivate: [AuthGuardService],
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ListenersRoutingModule {
}
