import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RepetitiveMeal} from "../../shared/rMeal.model";
import {MealType} from "../../shared/mealType.model";
import {Dish} from "../../shared/dish.model";
import {DaysOfWeek} from "../../../shared/common/DaysOfWeek";

@Component({
    selector: 'app-meals-form',
    templateUrl: './meals-form.component.html',
    styleUrls: ['./meals-form.component.css']
})
export class MealsFormComponent implements OnInit {

    @Output() created: EventEmitter<RepetitiveMeal> = new EventEmitter<RepetitiveMeal>();
    @Input() rMeal: RepetitiveMeal;
    @Input() mealTypes: MealType[] = [];
    @Input() dishes: Dish[] = [];
    daysOfWeek = DaysOfWeek.getDaysOfWeek();
    weekFrequencyData = DaysOfWeek.getWeekFrequencyData();

    constructor() {
    }

    ngOnInit() {
        if (!this.rMeal) {
            this.rMeal = new RepetitiveMeal();
        }
    }

    onSubmit() {
        this.created.emit(this.rMeal);
    }

}
