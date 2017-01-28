import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './components/app.component';
import { AppRoutingModule} from "./app-routing.module";
import {TasksModule} from "./components/tasks/tasks.module";
import {ScheduleModule} from "./components/schedule/shedule.module";
import { MenuComponent } from './components/menu/menu.component';
import { WindowComponent } from './components/shared/window/window.component';
import { TimerComponent } from './components/shared/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimerComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      AppRoutingModule,
      TasksModule,
      ScheduleModule,
      MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }