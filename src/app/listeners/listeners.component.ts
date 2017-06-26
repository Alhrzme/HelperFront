import {Component, OnInit} from '@angular/core';
import {ListenersService} from "../shared/listeners.service";
import {Listener} from "./shared/listener.model";

@Component({
    selector: 'app-listeners',
    templateUrl: './listeners.component.html',
    styleUrls: ['./listeners.component.css']
})
export class ListenersComponent implements OnInit {

    title: string = 'Слушатели';
    listeners: Listener[];

    constructor(private listenersService: ListenersService) {
    }

    ngOnInit() {
        this.listenersService.getListeners()
            .subscribe(
                listeners => this.listeners = listeners,
                error => console.log(error)
            )
    }

    onListenerCreated(listener: Listener) {
        this.listenersService.addListener(listener)
            .subscribe(
                listener => {
                    if (!this.listeners) {
                        this.listeners = [];
                    }
                    this.listeners.push(listener)
                },
                error => console.log(error)
            )
    }

    onListenerDeleted(listener: Listener) {
        let listenerIndex = this.listeners.indexOf(listener);
        this.listenersService.removeListener(listener)
            .subscribe(
                listener => {
                    if (listenerIndex > -1) {
                        this.listeners.splice(listenerIndex, 1);
                    }
                },
                error => console.log(error)
            )
    }

    onListenerEdited(listener: Listener) {
        this.listenersService.editListener(listener).subscribe(
            listener => {},
            error => console.log(error)
        );
    }
}
