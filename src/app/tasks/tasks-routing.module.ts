import { NgModule }      from '@angular/core';

import {RouterModule} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {TaskDataComponent} from "./taskData/task-data.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'tasks',
                component: TasksComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: TaskDataComponent,
                        children: [
                            {
                                path: '',
                                component: TaskHomeComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule { }
