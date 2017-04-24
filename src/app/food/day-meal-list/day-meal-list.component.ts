import {Component, Input, OnInit} from '@angular/core';
import {Meal} from "../shared/meal.model";

@Component({
    selector: 'app-day-meal-list',
    templateUrl: './day-meal-list.component.html',
    styleUrls: ['./day-meal-list.component.css']
})
export class DayMealListComponent implements OnInit {

    @Input() mealList: Meal[];

    constructor() {
    }

    ngOnInit() {
    }

}
