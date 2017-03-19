import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {ListenersRoutingModule} from "./listeners-routing.module";
import { ListenersFormComponent } from './listeners-form/listeners-form.component';
import { ListenersListComponent } from './listeners-list/listeners-list.component';
import {CommonModule} from "@angular/common";
import {ListenersComponent} from "./listeners.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ListenersRoutingModule
    ],
    declarations: [
        ListenersComponent,
        ListenersFormComponent,
        ListenersListComponent
    ],
    exports: [
        ListenersComponent
    ]
})
export class ListenersModule {
}
