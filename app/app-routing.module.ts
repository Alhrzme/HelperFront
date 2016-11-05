import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { TasksPageComponent} from './components/tasks/taskList/tasks-page.component'
import { TaskTreePageComponent } from  './components/tasks/taskTree/task-tree-page.component'


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'tasks', component: TasksPageComponent },
            { path: 'tasks/:id', component: TaskTreePageComponent },
            { path: '', component: TasksPageComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
