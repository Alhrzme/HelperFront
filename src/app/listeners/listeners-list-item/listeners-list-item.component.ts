import {Component, OnInit, Input} from '@angular/core';
import {Listener} from "../shared/listener.model";

@Component({
    selector: 'app-listeners-list-item',
    templateUrl: './listeners-list-item.component.html',
    styleUrls: ['./listeners-list-item.component.css']
})
export class ListenersListItemComponent implements OnInit {

    @Input() listener: Listener;

    constructor() {
    }

    ngOnInit() {
    }

}
