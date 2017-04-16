import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {DimensionsData} from "../../../shared/common/DimensionsData";

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {
    @Input() ingredient: Ingredient;
    @Output() created: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {
    }

    dimensions = DimensionsData.getDimensions();

    ngOnInit() {
        if (!this.ingredient) {
            this.setDefaultValues();
        }
    }

    setDefaultValues() {
        this.ingredient = new Ingredient();
        this.ingredient.dimension = this.dimensions[0].value;
    }

    onSubmit() {
        this.created.emit(this.ingredient);
    }
}
