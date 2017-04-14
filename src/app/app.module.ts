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
import {CookieService} from "angular2-cookie/core";
import {LoginModule} from "./login/login.module";
import {NotesModule} from "./notes/notes.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
    ],
    imports: [
        NotesModule,
        LoginModule,
        ListenersModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        TasksModule,
        ScheduleModule,
        ErrorsModule,
        BrowserAnimationsModule
    ],
    providers: [
        CookieService
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
}