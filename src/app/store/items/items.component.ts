import {Component, OnInit} from '@angular/core';
import {Item} from "../shared/item.model";
import {ItemService} from "../shared/item.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    title: string = 'Итемы';
    items: Item[];

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.getItems();
    }

    onItemCreated(item: Item) {
        this.itemService.addItem(item).subscribe(
            item => {
                if (!this.items) {
                    this.items = []
                }
                this.items.push(item);
            },
            error => console.log(error)
        );
    }

    getItems() {
        this.itemService.getItems().subscribe(
            items => this.items = items,
            error => console.log(error)
        );
    }
}
