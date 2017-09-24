import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task-list.component";
import {TaskListItemComponent} from "../task-list-item/task-list-item.component";
import {TaskService} from "../../shared/services/tasks.service";
import {FormsModule} from "@angular/forms";
import {TaskMoveModalComponent} from "../task-list-item/task-move-modal/task-move-modal.component";
import {AlertModalComponent} from "../../../../shared/components/alert-modal/alert-modal.component";
import {MdSelectModule, MdTooltipModule, MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        CommonModule,
        FormsModule,
        MdInputModule,
        MdTooltipModule,
        MdSelectModule,
        MdIconModule
    ],
    declarations: [
        TaskListComponent,
        TaskListItemComponent,
        TaskMoveModalComponent,
        AlertModalComponent
    ],
    providers: [
        TaskService
    ],
    exports: [
        TaskListComponent
    ],
    entryComponents: [
        TaskMoveModalComponent,
        AlertModalComponent
    ]
})
export class TaskListModule {
}
