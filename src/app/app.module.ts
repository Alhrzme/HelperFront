import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {TasksModule} from "./tasks/tasks.module";
import {ScheduleModule} from "./schedule/shedule.module";
import {TimerComponent} from './shared/timer/timer.component';
import {ErrorsModule} from "./errors/errors.module";
import {ListenersModule} from "./listeners/listeners.module";

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
    ],
    imports: [
        ListenersModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        TasksModule,
        ScheduleModule,
        ErrorsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
}