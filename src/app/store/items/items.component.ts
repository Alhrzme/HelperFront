import {Component, OnInit} from '@angular/core';
import {Item} from "../shared/item.model";
import {ItemService} from "../shared/item.service";
import {ItemCategory} from "../shared/item-category";
import {ItemCategoryService} from "../shared/item-category.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    title: string = 'Итемы';
    items: Item[];
    itemCategories: ItemCategory[];

    constructor(private itemService: ItemService, private itemCategoryService: ItemCategoryService) {
    }

    ngOnInit() {
        this.getItems();
        this.getItemCategories();
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

    //TODO: Перенести в ассетики
    getItemCategories() {
        this.itemCategoryService.getCategories().subscribe(
            categories => this.itemCategories = categories,
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
