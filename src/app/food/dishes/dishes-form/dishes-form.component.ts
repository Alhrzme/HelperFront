import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from "../../shared/dish.model";

@Component({
    selector: 'app-dishes-form',
    templateUrl: './dishes-form.component.html',
    styleUrls: ['./dishes-form.component.css']
})
export class DishesFormComponent implements OnInit {

    @Input() dish: Dish;
    @Output() created: EventEmitter<Dish> = new EventEmitter<Dish>();

    constructor() {
    }

    ngOnInit() {
        if (!this.dish) {
            this.dish = new Dish();
        }
    }

    onSubmit() {
        this.created.emit(this.dish);
    }
}
