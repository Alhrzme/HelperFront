import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-recipes-list-item',
    templateUrl: './recipes-list-item.component.html',
    styleUrls: ['./recipes-list-item.component.css']
})
export class RecipesListItemComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onSelect() {
        this.router.navigate(['/food/recipes', this.recipe.id])
    }
}
