import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorsHomeComponent} from './errors-home/errors-home.component';
import {ErrorsRoutingModule} from "./errors-routing.module";
import {ErrorsListModule} from "./errors-list/errors-list.module";
import { ErrorsFormComponent } from './errors-form/errors-form.component';
import {FormsModule} from "@angular/forms";
import {ErrorsService} from "./shared/errors.service";
import { ErrorDetailsComponent } from './error-details/error-details.component';
import { ErrorsExtendedFormComponent } from './errors-extended-form/errors-extended-form.component';
import {ErrorsComponent} from "./errors.component";
import {MdInputModule, MdSelectModule, MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdSelectModule,
        MdButtonModule,
        CommonModule,
        ErrorsRoutingModule,
        ErrorsListModule,
        FormsModule,
        MdCheckboxModule
    ],
    declarations: [
        ErrorsComponent,
        ErrorsHomeComponent,
        ErrorsFormComponent,
        ErrorDetailsComponent,
        ErrorsExtendedFormComponent,
    ],
    providers: [
        ErrorsService
    ],
    exports: [
        ErrorsComponent
    ]
})
export class ErrorsModule {
}
