import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TaskDataComponent }    from './taskData/task-data.component';
import { TaskListComponent }  from './taskData/taskHome/task-list/task-list.component';
import { TaskFormComponent }  from './taskData/taskHome/task-form/task-form.component';
import { TaskListItemComponent }  from './taskData/taskHome/task-list-item/task-list-item.component';
import { TaskService } from "../shared/tasks/tasks.service";
import { TasksRoutingModule } from './tasks-routing.module';
import {TasksComponent} from "./tasks.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        TaskDataComponent,
        TaskListComponent,
        TaskFormComponent,
        TaskListItemComponent,
        TasksComponent,
        TaskHomeComponent,
    ],
    providers: [
        TaskService
    ]
})
export class TasksModule {}
