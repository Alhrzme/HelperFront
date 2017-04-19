import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../shared/recipes.service";
import {Recipe} from "../../shared/recipe.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-recipes-form-home',
    templateUrl: './recipes-form-home.component.html',
    styleUrls: ['./recipes-form-home.component.css']
})
export class RecipesFormHomeComponent implements OnInit {

    recipes: Recipe[];

    constructor(private recipesService: RecipesService, private router: Router) {
    }

    ngOnInit() {
    }

    onRecipeCreated(recipe: Recipe) {
        this.recipesService.addRecipe(recipe).subscribe(
            recipe => {
                this.router.navigate(['/food/recipes', recipe.id])
            },
            error => console.log(error)
        );
    }
}
