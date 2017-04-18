import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {IngredientsHomeComponent} from "./ingredients/ingredients-home/ingredients-home.component";
import {RecipesHomeComponent} from "./recipes/recipes-home/recipes-home.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'food',
                component: FoodComponent,
                children: [
                    {
                        path: '',
                        component: FoodHomeComponent
                    },
                    {
                        path: 'ingredients',
                        component: IngredientsHomeComponent
                    },
                    {
                        path: 'recipes',
                        children: [
                            {
                                path: '',
                                component: RecipesHomeComponent
                            },
                            {
                                path: ':recipeId',
                                component: RecipeDetailsComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FoodRoutingModule {
}
