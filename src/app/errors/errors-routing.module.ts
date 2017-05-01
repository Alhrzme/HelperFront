import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ErrorsComponent} from "./errors.component";
import {ErrorsHomeComponent} from "./errors-home/errors-home.component";
import {ErrorDetailsComponent} from "./error-details/error-details.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'errors',
                component: ErrorsComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: ErrorsHomeComponent
                    },
                    {
                        path: ':errorId',
                        component: ErrorDetailsComponent
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
