import { NgModule }      from '@angular/core';

import {RouterModule} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {TaskDataComponent} from "./taskData/task-data.component";
import {TaskDetailComponent} from "./taskData/taskDetail/task-detail.component";
import {TaskHomeComponent} from "./taskData/taskHome/task-home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'tasks',
                component: TasksComponent,
                children: [
                    {
                        path: '',
                        component: TaskDataComponent,
                        children: [
                            {
                                path: ':id',
                                component: TaskDetailComponent
                            },
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
