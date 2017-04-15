import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FoodRoutingModule} from "./food-routing.module";
import {FoodScheduleService} from "./shared/food-schedule.service";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {FoodScheduleComponent} from "./food-schedule/food-schedule.component";
import {FoodComponent} from "./food.component";
import { FoodScheduleFormComponent } from './food-schedule/food-schedule-form/food-schedule-form.component';
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FoodRoutingModule,
        MaterialModule
    ],
    declarations: [
        FoodHomeComponent,
        FoodScheduleComponent,
        FoodComponent,
        FoodScheduleFormComponent
    ],
    providers: [
        FoodScheduleService
    ]
})
export class FoodModule {
}
