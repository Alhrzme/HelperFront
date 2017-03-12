import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Error} from "../shared/error.model";

@Component({
    selector: 'app-errors-form',
    templateUrl: './errors-form.component.html',
    styleUrls: ['./errors-form.component.css']
})
export class ErrorsFormComponent implements OnInit {

    error: Error = new Error();
    @Output() created: EventEmitter<Error> = new EventEmitter<Error>();

    constructor() {
    }

    onSubmit() {
        this.created.emit(this.error);
        this.error = new Error();
    }

    ngOnInit() {
    }

}
