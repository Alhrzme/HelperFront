import {Component, OnInit} from '@angular/core';
import {Dish} from "../../shared/dish.model";
import {DishesService} from "../../shared/dishes.service";

@Component({
    selector: 'app-dishes-home',
    templateUrl: './dishes-home.component.html',
    styleUrls: ['./dishes-home.component.css']
})
export class DishesHomeComponent implements OnInit {

    dishes: Dish[];
    constructor(private dishesService: DishesService) {
    }

    ngOnInit() {
        this.getDishes();
    }

    onDishCreated(dish:Dish) {
        this.dishesService.addDish(dish).subscribe(
            dish => {
                if (!this.dishes) {
                    this.dishes = [];
                }
                this.dishes.push(dish);
            },
            error => console.log(error)
        );
    }

    getDishes() {
        this.dishesService.getDishes().subscribe(
            dishes => this.dishes = dishes,
            error => console.log(error)
        );
    }
}
