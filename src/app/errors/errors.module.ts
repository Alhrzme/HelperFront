import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorsHomeComponent} from './errors-home/errors-home.component';
import {ErrorsRoutingModule} from "./errors-routing.module";
import {ErrorsListModule} from "./errors-list/errors-list.module";
import { ErrorsFormComponent } from './errors-form/errors-form.component';

@NgModule({
    imports: [
        CommonModule,
        ErrorsRoutingModule,
        ErrorsListModule
    ],
    declarations: [
        ErrorsHomeComponent,
        ErrorsFormComponent,
    ]
})
export class ErrorsModule {
}
