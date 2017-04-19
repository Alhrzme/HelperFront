import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {Dish} from "../../shared/dish.model";
import {IngredientData} from "../../shared/IngredientData.model";
import {Ingredient} from "../../shared/ingredient.model";
import {IngredientsService} from "../../shared/ingredients.service";
import {DishesService} from "../../shared/dishes.service";

@Component({
    selector: 'app-recipes-form',
    templateUrl: './recipes-form.component.html',
    styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {

    @Input() recipe: Recipe;
    @Output() created: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    ingredients: Ingredient[];
    isDisplayForm: boolean = false;
    dishesList: Dish[] = [];
    iDFormButtonText:string = 'add';

    //todo: После добавления функциональности блюд добавить получение списка и указания оного как списка для выбора в форму
    constructor(private ingredientsService: IngredientsService, protected dishesService:DishesService) {
    }

    onIngredientDataCreated(ingredientData: IngredientData) {
        this.recipe.ingredientsData.push(ingredientData);
    }
    
    switchIDFormDisplaying() {
        this.isDisplayForm = !this.isDisplayForm;
        this.iDFormButtonText = this.isDisplayForm ? 'remove' : 'add';
    }

    ngOnInit() {
        if (!this.recipe) {
            this.setDefaultValues();
        }
        this.getIngredients();
        this.getDishes();
    }

    getIngredients() {
        this.ingredientsService.getIngredients().subscribe(
            ingredients => this.ingredients = ingredients,
            error => console.log(error)
        );
    }

    getDishes() {
        this.dishesService.getDishes().subscribe(
            dishes => this.dishesList = dishes,
            error => console.log(error)
        );
    }

    private setDefaultValues() {
        this.recipe = new Recipe();
    }

    onSubmit() {
        this.created.emit(this.recipe);
    }
}
