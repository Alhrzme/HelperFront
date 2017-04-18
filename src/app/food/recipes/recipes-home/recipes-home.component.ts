import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipesService} from "../../shared/recipes.service";
import {IngredientData} from "../../shared/IngredientData.model";

@Component({
    selector: 'app-recipes-home',
    templateUrl: './recipes-home.component.html',
    styleUrls: ['./recipes-home.component.css']
})
export class RecipesHomeComponent implements OnInit {

    recipes: Recipe[];
    isDisplayedForm:boolean = false;

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.recipesService.getRecipes().subscribe(
            recipes => this.recipes = recipes,
            error => console.log(error)
        );
    }

    onRecipeCreated(recipe: Recipe) {
        this.recipesService.addRecipe(recipe).subscribe(
            recipe => {
                if (!this.recipes) {
                    this.recipes = [];
                }
                this.recipes.push(recipe);
            },
            error => console.log(error)
        );
    }

    get formStateButtonText() {
        return this.isDisplayedForm ? 'Скрыть форму' : 'Показать форму';
    }

    changeFormState(button) {
        this.isDisplayedForm = !this.isDisplayedForm;
    }
}
