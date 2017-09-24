import {Component, OnInit} from '@angular/core';
import {BuyItemService} from "../shared/buy-item.service";
import {BuyItem} from "../shared/buy-item.model";
import {Item} from "../shared/item.model";
import {ItemService} from "../shared/item.service";

@Component({
    selector: 'app-buy-items',
    templateUrl: './buy-items.component.html',
    styleUrls: ['./buy-items.component.css']
})
export class BuyItemsComponent implements OnInit {

    buyItems: BuyItem[];
    items: Item[];
    constructor(private buyItemsService: BuyItemService, private itemsService: ItemService) {
    }

    ngOnInit() {
        this.getBuyItems();
        this.getItems();
    }

    getBuyItems() {
        this.buyItemsService.getItems().subscribe(
            items => this.buyItems = items,
            error => console.log(error)
        );
    }

    getItems() {
        this.itemsService.getItems().subscribe(
            items => this.items = items,
            error => console.log(error)
        );
    }

    onBuyItemEdited(buyItem: BuyItem) {
        let buyItemIndex;
        this.buyItems.forEach((item, index) => {
            if (item.id = buyItem.id) {
                buyItemIndex = index;
                console.log(index);
            }
        });
        this.buyItemsService.editBuyItem(buyItem).subscribe(
            (buyItem) => {
                if (buyItem.isBought) {
                    this.buyItems.splice(buyItemIndex, 1);
                }
            },
            error => console.log(error)
        );
    }

    onBuyItemCreated(item: BuyItem) {
        this.buyItemsService.addItem(item).subscribe(
            item => {
                if (!this.buyItems) {
                    this.buyItems = [];
                }
                this.buyItems.push(item);
            },
            error => console.log(error)
        );
    }

}
