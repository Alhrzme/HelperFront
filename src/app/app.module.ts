import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppRoutingModule} from "./app-routing.module";
import {TasksModule} from "./components/tasks/tasks.module";
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      AppRoutingModule,
      TasksModule,
      AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }