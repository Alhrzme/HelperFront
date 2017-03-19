import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ListenersComponent} from "./listeners.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'listeners',
                component: ListenersComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ListenersRoutingModule {
}
