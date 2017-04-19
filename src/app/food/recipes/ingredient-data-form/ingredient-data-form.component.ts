import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {IngredientData} from "../../shared/IngredientData.model";

@Component({
    selector: 'app-ingredient-data-form',
    templateUrl: './ingredient-data-form.component.html',
    styleUrls: ['./ingredient-data-form.component.css']
})
export class IngredientDataFormComponent implements OnInit {

    @Input() ingredients: Ingredient[] = [];
    @Input() ingredientData: IngredientData;
    @Output() created: EventEmitter<IngredientData> = new EventEmitter<IngredientData>();

    constructor() {
    }

    ngOnInit() {
        if (!this.ingredientData) {
            this.ingredientData = new IngredientData();
        }
    }

    onSubmit() {
        this.created.emit(this.ingredientData);
        this.ingredientData = new IngredientData();
    }
}
