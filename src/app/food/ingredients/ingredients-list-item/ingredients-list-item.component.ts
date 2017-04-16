import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-ingredients-list-item',
    templateUrl: './ingredients-list-item.component.html',
    styleUrls: ['./ingredients-list-item.component.css']
})
export class IngredientsListItemComponent implements OnInit {

    @Input() ingredient: Ingredient;

    constructor() {
    }

    ngOnInit() {
    }

}
