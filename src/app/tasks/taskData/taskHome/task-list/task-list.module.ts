import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task-list.component";
import {TaskListItemComponent} from "../task-list-item/task-list-item.component";
import {TaskService} from "../../shared/services/tasks.service";
import {FormsModule} from "@angular/forms";
import {TaskMoveModalComponent} from "../task-list-item/task-move-modal/task-move-modal.component";
import {AlertModalComponent} from "../../../../shared/components/alert-modal/alert-modal.component";
import {
    MatSelectModule, MatTooltipModule, MatButtonModule, MatInputModule, MatIconModule,
    MatButtonToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        MatTooltipModule,
        MatSelectModule,
        MatIconModule,
        MatButtonToggleModule
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
