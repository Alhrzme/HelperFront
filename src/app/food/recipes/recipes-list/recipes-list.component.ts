import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    @Input() recipes: Recipe[];

    constructor() {
    }

    ngOnInit() {
    }

}
