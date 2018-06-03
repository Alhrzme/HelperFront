import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ListenersRoutingModule} from "./listeners-routing.module";
import { ListenersFormComponent } from './listeners-form/listeners-form.component';
import { ListenersListComponent } from './listeners-list/listeners-list.component';
import {CommonModule} from "@angular/common";
import {ListenersComponent} from "./listeners.component";
import { ListenersListItemComponent } from './listeners-list-item/listeners-list-item.component';
import {ListenersService} from "../shared/listeners.service";
import {MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        ListenersRoutingModule,
        MatIconModule
    ],
    declarations: [
        ListenersComponent,
        ListenersFormComponent,
        ListenersListComponent,
        ListenersListItemComponent
    ],
    exports: [
        ListenersComponent
    ],
    providers: [
        ListenersService
    ]
})
export class ListenersModule {
}
