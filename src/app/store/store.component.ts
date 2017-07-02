import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

    constructor() {
    }

    sections = [
        {'title': 'Главная', link: '/store'},
        {'title': 'Итемы', link: '/store/items'},
        {'title': 'Покупки', link: '/store/purchases'}
    ];

    ngOnInit() {
    }
}
