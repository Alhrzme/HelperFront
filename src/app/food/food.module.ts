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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FoodRoutingModule,
        MaterialModule
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
        RecipesListItemComponent
    ],
    providers: [
        IngredientsService
    ]
})
export class FoodModule {
}
