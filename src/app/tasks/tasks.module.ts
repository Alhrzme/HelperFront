import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TaskDataComponent }    from './taskData/task-data.component';
import { TaskListComponent }  from './taskData/taskHome/task-list/task-list.component';
import { TaskFormComponent }  from './taskData/taskHome/task-form/task-form.component';
import { TaskListItemComponent }  from './taskData/taskHome/task-list-item/task-list-item.component';
import { TaskService } from "./taskData/shared/services/tasks.service";
import { TasksRoutingModule } from './tasks-routing.module';
import {TasksComponent} from "./tasks.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";
import {MaterialModule} from "@angular/material";
import {RepetitiveTaskFormComponent} from "./taskData/taskHome/repetitive-task-form/repetitive-task-form.component";
import {BaseService} from "./taskData/shared/services/base-service.service";
import { DayTaskListComponent } from './taskData/day-task-list/day-task-list.component';
import { DayTasksComponent } from './taskData/day-tasks/day-tasks.component';
import { DayTasksListComponent } from './taskData/dayTasks/day-tasks-list/day-tasks-list.component';
import { DayTasksListItemComponent } from './taskData/dayTasks/day-tasks-list-item/day-tasks-list-item.component';

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
        RepetitiveTaskFormComponent,
        DayTaskListComponent,
        DayTasksComponent,
        DayTasksListComponent,
        DayTasksListItemComponent,
    ],
    providers: [
        TaskService,
        BaseService,
    ]
})
export class TasksModule {}
