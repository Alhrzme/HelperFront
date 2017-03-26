import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TaskDataComponent }    from './taskData/task-data.component';
import { TaskFormComponent }  from './taskData/taskHome/task-form/task-form.component';
import { TaskService } from "./taskData/shared/services/tasks.service";
import { TasksRoutingModule } from './tasks-routing.module';
import {TasksComponent} from "./tasks.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";
import {MaterialModule} from "@angular/material";
import {RepetitiveTaskFormComponent} from "./taskData/taskHome/repetitive-task-form/repetitive-task-form.component";
import {BaseService} from "./taskData/shared/services/base-service.service";
import {TaskListModule} from "./taskData/taskHome/task-list/task-list.module";
import {CookieService} from "angular2-cookie/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule,
        TaskListModule,
        MaterialModule
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
        CookieService
    ],
    exports: [MaterialModule]
})
export class TasksModule {}
