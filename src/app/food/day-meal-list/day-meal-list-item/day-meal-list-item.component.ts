import {Component, Input, OnInit} from '@angular/core';
import {Meal} from "../../shared/meal.model";

@Component({
    selector: 'app-day-meal-list-item',
    templateUrl: './day-meal-list-item.component.html',
    styleUrls: ['./day-meal-list-item.component.css']
})
export class DayMealListItemComponent implements OnInit {

    @Input() meal: Meal;

    constructor() {
    }

    ngOnInit() {
    }

}
