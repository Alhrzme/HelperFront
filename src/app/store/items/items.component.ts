import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    title: string = 'Итемы';

    constructor() {
    }

    ngOnInit() {
    }

}
