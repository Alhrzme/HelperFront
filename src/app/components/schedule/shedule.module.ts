import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {MaterialModule} from "@angular/material";

import {ScheduleRoutingModule} from "./shedule-routing.module";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ScheduleComponent} from "./schedule.component";
import { PeriodComponent } from './day-schedule/period/period.component';
import { ScheduleFormComponent } from './day-schedule/schedule-form/schedule-form.component';
import { PeriodListComponent } from './day-schedule/period-list/period-list.component';
import { ScheduleService } from "../shared/schedule/schedule.service";
import { PeriodFormComponent } from './day-schedule/period-form/period-form.component';
import {PeriodService} from "../shared/schedule/period.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ScheduleRoutingModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        DayScheduleComponent,
        CalendarComponent,
        ScheduleComponent,
        PeriodComponent,
        ScheduleFormComponent,
        PeriodListComponent,
        PeriodFormComponent,
    ],
    providers: [
        ScheduleService,
        PeriodService
    ]
})
export class ScheduleModule {}
