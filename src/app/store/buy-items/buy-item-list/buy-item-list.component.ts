import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyItem} from "../../shared/buy-item.model";

@Component({
    selector: 'app-buy-item-list',
    templateUrl: './buy-item-list.component.html',
    styleUrls: ['./buy-item-list.component.css']
})
export class BuyItemListComponent implements OnInit {

    @Input() buyItems: BuyItem[];
    @Output() bought = new EventEmitter<BuyItem>();
    get sortedBuyItems() {
        return this.buyItems.sort((item1, item2) => {
            return item1.item.category.title > item2.item.category.title ? 1 : -1;
        })
    }

    constructor() {
    }

    ngOnInit() {
    }

    onBoughtButtonClick(buyItem: BuyItem) {
        buyItem.isBought = true;
        this.bought.emit(buyItem);
    }
}
