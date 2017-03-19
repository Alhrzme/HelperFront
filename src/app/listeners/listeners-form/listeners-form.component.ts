import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Listener} from "../shared/listener.model";

@Component({
    selector: 'app-listeners-form',
    templateUrl: './listeners-form.component.html',
    styleUrls: ['./listeners-form.component.css']
})
export class ListenersFormComponent implements OnInit {

    @Input() listener:Listener = new Listener();

    @Output() created:EventEmitter<Listener> = new EventEmitter<Listener>();

    currentAction:string;

    constructor() {
    }

    addAction() {
        this.listener.actions.push(this.currentAction);
        this.currentAction = null;
    }

    onSubmit() {
        this.created.emit(this.listener);
        this.listener = new Listener();
    }

    ngOnInit() {

    }

}
