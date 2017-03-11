import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ErrorsComponent} from "./errors.component";
import {ErrorsHomeComponent} from "./errors-home/errors-home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'errors',
                component: ErrorsComponent,
                children: [
                    {
                        path: '',
                        component: ErrorsHomeComponent
                    }
                ]
            }
        ])
    ],
    declarations: [

    ],
    exports: [
        RouterModule
    ]
})
export class ErrorsRoutingModule {
}
