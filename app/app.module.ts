import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { TaskListComponent } from  './components/tasks/task-list/task-list.component'
import { TaskFormComponent } from  './components/tasks/task-form/task-form.component'
import { TasksComponent} from './components/tasks/tasks.component'



@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent, TasksComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
