import {Component, OnInit} from '@angular/core';
import {Dish} from "../../shared/dish.model";
import {DishesService} from "../../shared/dishes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-dish-details',
    templateUrl: './dish-details.component.html',
    styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

    dish: Dish;

    constructor(private dishesService: DishesService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let dishId;
        this.route.params.forEach((params: Params) => {
            dishId = params['dishId'];
        });
        this.dishesService.getDish(dishId).subscribe(
            dish => this.dish = dish,
            error => console.log(error)
        );
    }

}
