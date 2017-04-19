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

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.recipesService.getRecipes().subscribe(
            recipes => this.recipes = recipes,
            error => console.log(error)
        );
    }
}
