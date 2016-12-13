import { NgModule }      from '@angular/core';

import {RouterModule} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {TaskDataComponent} from "./taskData/task-data.component";
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
                                path: '',
                                component: TaskHomeComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tasks',
                pathMatch: 'full'
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule { }
