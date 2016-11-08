import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import {TaskHomeComponent} from "./components/tasks/taskData/taskHome/task-home.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'tasks',  component: TaskHomeComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
