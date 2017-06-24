import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Listener} from "../shared/listener.model";

@Component({
    selector: 'app-listeners-list-item',
    templateUrl: './listeners-list-item.component.html',
    styleUrls: ['./listeners-list-item.component.css']
})
export class ListenersListItemComponent implements OnInit {

    @Input() listener: Listener;
    @Output() deleted:EventEmitter<Listener> = new EventEmitter<Listener>();
    @Output() editable: EventEmitter<Listener> = new EventEmitter<Listener>();

    constructor() {
    }

    ngOnInit() {
    }

    public deleteListener() {
        this.deleted.emit(this.listener);
    }

    editListener() {
        this.editable.emit(this.listener);
    }
}
