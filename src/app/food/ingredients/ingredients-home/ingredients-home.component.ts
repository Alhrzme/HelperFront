import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {IngredientsService} from "../../shared/ingredients.service";

@Component({
    selector: 'app-ingredients-home',
    templateUrl: './ingredients-home.component.html',
    styleUrls: ['./ingredients-home.component.css']
})
export class IngredientsHomeComponent implements OnInit {
    ingredients: Ingredient[];
    constructor(protected ingredientsService: IngredientsService) {
    }

    ngOnInit() {
        this.getIngredients();
    }

    getIngredients() {
        this.ingredientsService.getIngredients().subscribe(
            ingredients => this.ingredients = ingredients,
            error => console.log(error)
        );
    }

    onIngredientCreated(ingredient: Ingredient) {
        this.ingredientsService.addIngredient(ingredient).subscribe(
            ingredient => {
                if (!this.ingredients) {
                    this.ingredients = [];
                }
                this.ingredients.push(ingredient);
            },
            error => console.log(error)
        );
    }
}
