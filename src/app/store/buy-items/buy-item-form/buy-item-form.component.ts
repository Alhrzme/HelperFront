import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyItem} from "../../shared/buy-item.model";
import {Item} from "../../shared/item.model";

@Component({
    selector: 'app-buy-item-form',
    templateUrl: './buy-item-form.component.html',
    styleUrls: ['./buy-item-form.component.css']
})
export class BuyItemFormComponent implements OnInit {
    @Input() buyItem: BuyItem;
    @Input() items: Item[];
    @Output() created: EventEmitter<BuyItem> = new EventEmitter<BuyItem>();

    constructor() {
    }

    ngOnInit() {
        if (!this.buyItem) {
            this.setDefaultValues();
        }
    }

    setDefaultValues() {
        this.buyItem = new BuyItem();
        this.buyItem.quantity = 1;
    }

    onSubmit() {
        this.created.emit(this.buyItem);
    }
}
