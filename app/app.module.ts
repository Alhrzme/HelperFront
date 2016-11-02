import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './components/app.component';
import { TaskListComponent } from  './components/tasks/taskList/task-list/task-list.component'
import { TaskFormComponent } from  './components/tasks/taskList/task-form/task-form.component'
import { TasksComponent} from './components/tasks/taskList/tasks.component'
import {TaskListItemComponent} from "./components/tasks/taskList/task-list-item/task-list-item.component";



@NgModule({
    imports:      [ BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            { path: 'hero-list' }
        ])
    ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent, TasksComponent, TaskListItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
