import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {Dish} from "../../shared/dish.model";
import {IngredientData} from "../../shared/IngredientData.model";

@Component({
    selector: 'app-recipes-form',
    templateUrl: './recipes-form.component.html',
    styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {

    @Input() recipe: Recipe;
    @Output() created: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    isDisplayForm: boolean = false;
    dishesList: Dish[] = [];

    //todo: После добавления функциональности блюд добавить получение списка и указания оного как списка для выбора в форму
    constructor() {
    }

    onIngredientDataCreated(ingredientData: IngredientData) {
        this.recipe.ingredientsData.push(ingredientData);
    }

    ngOnInit() {
        if (!this.recipe) {
            this.setDefaultValues();
        }
    }

    private setDefaultValues() {
        this.recipe = new Recipe();
    }

    onSubmit() {
        this.created.emit(this.recipe);
    }
}
