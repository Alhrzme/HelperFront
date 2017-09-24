import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorsListComponent} from "./errors-list.component";
import { ErrorsListItemComponent } from './errors-list-item/errors-list-item.component';

@NgModule({
    imports: [
        CommonModule,
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
