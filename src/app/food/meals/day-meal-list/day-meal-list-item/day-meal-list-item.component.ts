import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MealEntry} from "../../../shared/meal-entry.model";
import {Dish} from "../../../shared/dish.model";

@Component({
    selector: 'app-day-meal-list-item',
    templateUrl: './day-meal-list-item.component.html',
    styleUrls: ['./day-meal-list-item.component.css']
})
export class DayMealListItemComponent implements OnInit {

    @Input() mealEntry: MealEntry;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToDish(dish: Dish) {
        this.router.navigate(['/food/dishes', dish.id])
    }
}
