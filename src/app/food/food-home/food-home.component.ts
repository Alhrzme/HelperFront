import {Component, OnInit} from '@angular/core';
import {Meal} from "../shared/meal.model";
import {MealsService} from "../shared/meals.service";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from "moment";
import {TimeHelper} from "../../shared/services/time-helper.service";
import {Dish} from "../shared/dish.model";

@Component({
    selector: 'app-food-home',
    templateUrl: './food-home.component.html',
    styleUrls: ['./food-home.component.css']
})
export class FoodHomeComponent implements OnInit {

    dayMealList: Meal[];
    day: string;
    dishes: Dish[];

    constructor(private mealsService: MealsService, private route: ActivatedRoute) {

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
    }

    getDayMeals() {
        this.mealsService.getMeals(this.day).subscribe(
            meals => this.dayMealList = meals,
            error => console.log(error)
        );
    }

}
