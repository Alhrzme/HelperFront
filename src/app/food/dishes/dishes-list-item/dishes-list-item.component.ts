import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../shared/dish.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dishes-list-item',
    templateUrl: './dishes-list-item.component.html',
    styleUrls: ['./dishes-list-item.component.css']
})
export class DishesListItemComponent implements OnInit {

    @Input() dish: Dish;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    moveToDetails() {
        this.router.navigate(['/food/dishes/', this.dish.id]);
    }
}
