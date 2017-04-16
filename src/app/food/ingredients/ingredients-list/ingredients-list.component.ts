import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-ingredients-list',
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

    @Input() ingredients: Ingredient[];

    constructor() {
    }

    ngOnInit() {
    }

}
