import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Error} from "../shared/error.model";

@Component({
    selector: 'app-errors-extended-form',
    templateUrl: './errors-extended-form.component.html',
    styleUrls: ['./errors-extended-form.component.css']
})
export class ErrorsExtendedFormComponent implements OnInit {

    @Input() error: Error;
    @Output() created: EventEmitter<Error> = new EventEmitter<Error>();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        if (!this.error.body) {
            this.error.body = this.error.title;
        }
        this.created.emit(this.error);
    }

}
