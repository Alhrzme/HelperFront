import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {TaskDataComponent}    from './taskData/task-data.component';
import {TaskFormComponent}  from './taskData/taskHome/task-form/task-form.component';
import {TaskService} from "./taskData/shared/services/tasks.service";
import {TasksRoutingModule} from './tasks-routing.module';
import {TasksComponent} from "./tasks.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";
import {RepetitiveTaskFormComponent} from "./taskData/taskHome/repetitive-task-form/repetitive-task-form.component";
import {BaseService} from "./taskData/shared/services/base-service.service";
import {TaskListModule} from "./taskData/taskHome/task-list/task-list.module";
import {TaskEntriesService} from "./taskData/shared/services/task-entries.service";
import {
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule
} from '@angular/material';
import {CKEditorModule} from "ng2-ckeditor";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule,
        TaskListModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        CKEditorModule
    ],
    declarations: [
        TaskDataComponent,
        TaskFormComponent,
        TasksComponent,
        TaskHomeComponent,
        RepetitiveTaskFormComponent,
    ],
    providers: [
        TaskService,
        BaseService,
        TaskEntriesService
    ]
})
export class TasksModule {
}
