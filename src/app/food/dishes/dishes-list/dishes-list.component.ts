import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../shared/dish.model";

@Component({
    selector: 'app-dishes-list',
    templateUrl: './dishes-list.component.html',
    styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

    @Input() dishes: Dish[];

    constructor() {
    }

    ngOnInit() {
    }

}
