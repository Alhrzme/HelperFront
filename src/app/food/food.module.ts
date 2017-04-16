import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FoodRoutingModule} from "./food-routing.module";
import {FoodScheduleService} from "./shared/food-schedule.service";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {FoodScheduleComponent} from "./food-schedule/food-schedule.component";
import {FoodComponent} from "./food.component";
import { FoodScheduleFormComponent } from './food-schedule/food-schedule-form/food-schedule-form.component';
import {MaterialModule} from "@angular/material";
import { IngredientsHomeComponent } from './ingredients/ingredients-home/ingredients-home.component';
import { IngredientFormComponent } from './ingredients/ingredient-form/ingredient-form.component';
import { IngredientsListComponent } from './ingredients/ingredients-list/ingredients-list.component';
import { IngredientsListItemComponent } from './ingredients/ingredients-list-item/ingredients-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FoodRoutingModule,
        MaterialModule
    ],
    declarations: [
        FoodHomeComponent,
        FoodScheduleComponent,
        FoodComponent,
        FoodScheduleFormComponent,
        IngredientsHomeComponent,
        IngredientFormComponent,
        IngredientsListComponent,
        IngredientsListItemComponent
    ],
    providers: [
        FoodScheduleService
    ]
})
export class FoodModule {
}
