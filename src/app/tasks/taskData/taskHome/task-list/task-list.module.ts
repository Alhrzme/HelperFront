import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task-list.component";
import {TaskListItemComponent} from "../task-list-item/task-list-item.component";
import {TaskService} from "../../shared/services/tasks.service";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        TaskListComponent,
        TaskListItemComponent
    ],
    providers: [
        TaskService
    ],
    exports: [
        TaskListComponent
    ]
})
export class TaskListModule {
}
