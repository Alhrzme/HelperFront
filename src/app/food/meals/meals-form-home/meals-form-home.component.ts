import { Component, OnInit } from '@angular/core';
import {Dish} from "../../shared/dish.model";
import {MealType} from "../../shared/mealType.model";
import {DishesService} from "../../shared/dishes.service";
import {MealsService} from "../../shared/meals.service";
import {MealTypesService} from "../../shared/meal-types.service";
import {RepetitiveMeal} from "../../shared/rMeal.model";

@Component({
  selector: 'app-meals-form-home',
  templateUrl: './meals-form-home.component.html',
  styleUrls: ['./meals-form-home.component.css']
})
export class MealsFormHomeComponent implements OnInit {

  dishes: Dish[];
  mealTypes: MealType[];

  constructor(private mealsService: MealsService,
              private dishesService: DishesService,
              private mealTypesService: MealTypesService) {
  }

  onMealsCreated(rMeal: RepetitiveMeal) {
    this.mealsService.addMeals(rMeal);
  }

  ngOnInit() {
    this.getDishes();
    this.getMealTypes();
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
