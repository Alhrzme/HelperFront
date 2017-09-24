import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyItem} from "../../shared/buy-item.model";

@Component({
    selector: 'app-buy-item-list',
    templateUrl: './buy-item-list.component.html',
    styleUrls: ['./buy-item-list.component.css']
})
export class BuyItemListComponent implements OnInit {

    @Input() buyItems: BuyItem[];
    buyItemsByCategories = [];
    @Output() bought = new EventEmitter<BuyItem>();

    sortBuyItemsByCategories() {
        this.buyItems.forEach(buyItem => {
            const category = buyItem.item.category.title;
            this.buyItemsByCategories[category]
                ? this.buyItemsByCategories[category].push(buyItem)
                : this.buyItemsByCategories[category] = [buyItem];
        });
    }

    constructor() {
    }

    ngOnInit() {
        this.sortBuyItemsByCategories();
    }

    onBoughtButtonClick(buyItem: BuyItem) {
        buyItem.isBought = true;
        this.bought.emit(buyItem);
    }
}
