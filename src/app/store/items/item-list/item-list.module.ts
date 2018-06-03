import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListComponent} from './item-list.component';
import {ItemListItemComponent} from './item-list-item/item-list-item.component';
import {MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatTooltipModule, MatListModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
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
