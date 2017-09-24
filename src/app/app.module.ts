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
import {LoginModule} from "./login/login.module";
import {NotesModule} from "./notes/notes.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FoodModule} from "./food/food.module";
import {ChallengesModule} from "./challenges/challenges.module";
import { SimpleNotificationsModule } from 'angular2-notifications';
import {StoreModule} from "./store/store.module";
import { StoreHomeComponent } from './store-home/store-home.component';
import {PushNotificationsService} from "angular2-notifications";
import { KeysPipe } from './shared/pipes/keys.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
        StoreHomeComponent
    ],
    imports: [
        FoodModule,
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
        StoreModule,
        BrowserAnimationsModule,
        MaterialModule,
        ChallengesModule,
        SimpleNotificationsModule.forRoot(),
    ],
    providers: [
        PushNotificationsService
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
}