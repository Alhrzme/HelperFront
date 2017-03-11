import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ErrorsListComponent} from "./errors-list.component";
import { ErrorsListItemComponent } from './errors-list-item/errors-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ErrorsListComponent,
        ErrorsListItemComponent
    ],
    exports: [
        ErrorsListComponent
    ]
})
export class ErrorsListModule {

}
