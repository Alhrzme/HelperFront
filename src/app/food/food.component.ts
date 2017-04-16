import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

    title: string = 'Питание';
    sections = [
        {'title' : 'Ингредиенты', link: '/food/ingredients'}
    ];
    constructor(protected router: Router) {
    }

    goTo(link) {
        console.log(link);
        this.router.navigate([link]);
    }

    ngOnInit() {
    }

}
