import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Listener} from "../shared/listener.model";

@Component({
    selector: 'app-listeners-list',
    templateUrl: './listeners-list.component.html',
    styleUrls: ['./listeners-list.component.css']
})
export class ListenersListComponent implements OnInit {

    @Input() listeners: Listener[];
    @Output() deleted : EventEmitter<Listener> = new EventEmitter<Listener>();

    constructor() {
    }

    ngOnInit() {
    }

    onListenerDeleted(listener:Listener) {
        this.deleted.emit(listener);
    }

}
