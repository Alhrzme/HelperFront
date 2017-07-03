import {Component, Input, OnInit} from '@angular/core';
import {BuyItem} from "../../shared/buy-item.model";

@Component({
    selector: 'app-buy-item-list',
    templateUrl: './buy-item-list.component.html',
    styleUrls: ['./buy-item-list.component.css']
})
export class BuyItemListComponent implements OnInit {

    @Input() buyItems: BuyItem[];

    constructor() {
    }

    ngOnInit() {
    }


}
