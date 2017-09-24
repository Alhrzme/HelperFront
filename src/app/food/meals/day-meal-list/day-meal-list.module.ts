import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DayMealListComponent} from './day-meal-list.component';
import {FormsModule} from "@angular/forms";
import {DayMealListItemComponent} from "./day-meal-list-item/day-meal-list-item.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        DayMealListComponent,
        DayMealListItemComponent
    ],
    exports: [
        DayMealListComponent
    ]
})
export class DayMealListModule {
}
