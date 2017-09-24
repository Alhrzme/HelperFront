import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListComponent} from './item-list.component';
import {ItemListItemComponent} from './item-list-item/item-list-item.component';
import {MdInputModule, MdSelectModule, MdButtonModule, MdIconModule, MdTooltipModule, MdListModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdInputModule,
        MdSelectModule,
        MdTooltipModule,
        MdListModule,
        MdButtonModule,
        MdIconModule,
    ],
    declarations: [
        ItemListComponent,
        ItemListItemComponent
    ],
    exports: [
        ItemListComponent
    ]
})
export class ItemListModule {
}
