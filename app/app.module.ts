import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './components/app.component';
import { TasksComponent } from './components/tasks/tasks.component'
import { TaskListComponent } from  './components/tasks/taskList/task-list/task-list.component'
import { TaskFormComponent } from  './components/tasks/taskList/task-form/task-form.component'
import { TasksPageComponent} from './components/tasks/taskList/tasks-page.component'
import { TaskListItemComponent } from "./components/tasks/taskList/task-list-item/task-list-item.component";
import { TaskTreePageComponent } from  './components/tasks/taskTree/task-tree-page.component'



@NgModule({
    imports:      [ BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            { path: 'tasks', component: TasksPageComponent },
            { path: 'tasks/:id', component: TaskTreePageComponent },
            { path: '', component: TasksPageComponent }
        ])
    ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent, TasksPageComponent,
        TaskListItemComponent, TaskTreePageComponent, TasksComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
