import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipesService} from "../../shared/recipes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

    recipe: Recipe;

    constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let recipeId;
        this.route.params.forEach((params: Params) => {
            recipeId = params['recipeId'];
        });

        this.recipesService.getRecipe(recipeId).subscribe(
            recipe => this.recipe = recipe,
            error => console.log(error)
        );
    }
}
