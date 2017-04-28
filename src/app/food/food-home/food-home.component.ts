import {Component, OnInit} from '@angular/core';
import {Meal} from "../shared/meal.model";
import {MealsService} from "../shared/meals.service";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from "moment";
import {TimeHelper} from "../../shared/services/time-helper.service";
import {Dish} from "../shared/dish.model";
import {DishesService} from "../shared/dishes.service";
import {MealTypesService} from "../shared/meal-types.service";
import {MealType} from "../shared/mealType.model";

@Component({
    selector: 'app-food-home',
    templateUrl: './food-home.component.html',
    styleUrls: ['./food-home.component.css']
})
export class FoodHomeComponent implements OnInit {

    dayMealList: Meal[];
    day: string;
    dishes: Dish[];
    mealTypes: MealType[];

    constructor(private mealsService: MealsService,
                private route: ActivatedRoute,
                private dishesService: DishesService,
                private mealTypesService: MealTypesService) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['date']) {
                this.day = params['date'];
            } else {
                this.day = moment().format(TimeHelper.DATE_FORMAT);
            }
        });
        this.getDayMeals();
        this.getDishes();
        this.getMealTypes();
    }

    getDayMeals() {
        this.mealsService.getMeals(this.day).subscribe(
            meals => this.dayMealList = meals,
            error => console.log(error)
        );
    }

    getDishes() {
        this.dishesService.getDishes().subscribe(
            dishes => this.dishes = dishes,
            error => console.log(error)
        );
    }

    getMealTypes() {
        this.mealTypesService.getMealTypes().subscribe(
            mealTypes => {
                this.mealTypes = [];
                for (let mealType of mealTypes) {
                    let isMealTypeSaved = false;
                    for (let existedMealType of this.mealTypes) {
                        if (existedMealType.title == mealType.title) {
                            isMealTypeSaved = true;
                        }
                    }
                    if (!isMealTypeSaved) {
                        this.mealTypes.push(mealType);
                    }
                }
            },
            error => console.log(error)
        );
    }

}
