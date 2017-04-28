import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FoodRoutingModule} from "./food-routing.module";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {FoodComponent} from "./food.component";
import {MaterialModule} from "@angular/material";
import { IngredientsHomeComponent } from './ingredients/ingredients-home/ingredients-home.component';
import { IngredientFormComponent } from './ingredients/ingredient-form/ingredient-form.component';
import { IngredientsListComponent } from './ingredients/ingredients-list/ingredients-list.component';
import { IngredientsListItemComponent } from './ingredients/ingredients-list-item/ingredients-list-item.component';
import {IngredientsService} from "./shared/ingredients.service";
import { RecipesHomeComponent } from './recipes/recipes-home/recipes-home.component';
import { RecipesFormComponent } from './recipes/recipes-form/recipes-form.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes/recipes-list-item/recipes-list-item.component';
import { IngredientDataFormComponent } from './recipes/ingredient-data-form/ingredient-data-form.component';
import { IngredientDataListComponent } from './recipes/ingredient-data-list/ingredient-data-list.component';
import { IngredientDataListItemComponent } from './recipes/ingredient-data-list-item/ingredient-data-list-item.component';
import {RecipesService} from "./shared/recipes.service";
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipesFormHomeComponent } from './recipes/recipes-form-home/recipes-form-home.component';
import { DishesHomeComponent } from './dishes/dishes-home/dishes-home.component';
import {DishesService} from "./shared/dishes.service";
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishesListItemComponent } from './dishes/dishes-list-item/dishes-list-item.component';
import { DishesFormComponent } from './dishes/dishes-form/dishes-form.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';
import {DayMealListModule} from "./meals/day-meal-list/day-meal-list.module";
import {MealsService} from "./shared/meals.service";
import { MealsComponent } from './meals/meals.component';
import { MealsFormComponent } from './meals/meals-form/meals-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FoodRoutingModule,
        MaterialModule,
        DayMealListModule
    ],
    declarations: [
        FoodHomeComponent,
        FoodComponent,
        IngredientsHomeComponent,
        IngredientFormComponent,
        IngredientsListComponent,
        IngredientsListItemComponent,
        RecipesHomeComponent,
        RecipesFormComponent,
        RecipesListComponent,
        RecipesListItemComponent,
        IngredientDataFormComponent,
        IngredientDataListComponent,
        IngredientDataListItemComponent,
        RecipeDetailsComponent,
        RecipesFormHomeComponent,
        DishesHomeComponent,
        DishesListComponent,
        DishesListItemComponent,
        DishesFormComponent,
        DishDetailsComponent,
        MealsComponent,
        MealsFormComponent,
    ],
    providers: [
        IngredientsService,
        RecipesService,
        DishesService,
        MealsService
    ]
})
export class FoodModule {
}
