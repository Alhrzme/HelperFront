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
    @Output() edited: EventEmitter<Listener> = new EventEmitter<Listener>();
    editListenerId: number;

    constructor() {
    }

    ngOnInit() {
    }

    onListenerDeleted(listener:Listener) {
        this.deleted.emit(listener);
    }

    onListenerEditable(listener: Listener) {
        this.editListenerId = listener.id;
    }

    isListenerEdited(listener: Listener) {
        return this.editListenerId == listener.id;
    }

    onListenerEdited(listener: Listener) {
        this.edited.emit(listener);
        this.editListenerId = null;
    }
}
