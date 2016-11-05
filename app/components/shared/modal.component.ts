import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Modal } from "./modal.model";

@Component({
    selector: 'modal',
    templateUrl: './app/components/shared/modal.component.html'
})

export class ModalComponent implements OnInit {

    @Input() modal : Modal;
    @Output() created: EventEmitter<Task>;

    constructor() {
        this.created = new EventEmitter<Task>()
    }

    ngOnInit() { }
}