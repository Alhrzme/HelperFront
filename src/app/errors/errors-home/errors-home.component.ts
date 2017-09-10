import {Component, OnInit} from '@angular/core';
import {Error} from "../shared/error.model";
import {ErrorsService} from "../shared/errors.service";

@Component({
    selector: 'app-errors-home',
    templateUrl: './errors-home.component.html',
    styleUrls: ['./errors-home.component.css']
})
export class ErrorsHomeComponent implements OnInit {
    isFormShown = false;
    newError: Error = new Error();
    errors: Error[] = [];
    constructor(private errorService: ErrorsService) {
    }

    ngOnInit() {
        this.errorService.getErrors()
            .subscribe(
                errorData => this.errors = errorData,
                error => console.log(error)
            )
    }

    onErrorCreate(error: Error) {
        console.log(error);
        this.errorService.createError(error)
            .subscribe(
                errorData => this.errors.push(errorData),
                error => console.log(error)
            )
    }

    onSwitchErrorFormStateButtonClick() {
        this.isFormShown = !this.isFormShown;
    }
}
