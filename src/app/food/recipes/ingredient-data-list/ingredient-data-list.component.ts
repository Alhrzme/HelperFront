import {Component, Input, OnInit} from '@angular/core';
import {IngredientData} from "../../shared/IngredientData.model";

@Component({
    selector: 'app-ingredient-data-list',
    templateUrl: './ingredient-data-list.component.html',
    styleUrls: ['./ingredient-data-list.component.css']
})
export class IngredientDataListComponent implements OnInit {

    @Input() ingredientsData: IngredientData[];

    constructor() {
    }

    ngOnInit() {
    }

}
