import {Component, OnInit} from '@angular/core';
import {ErrorsService} from "../shared/errors.service";
import {Error} from "../shared/error.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-error-details',
    templateUrl: './error-details.component.html',
    styleUrls: ['./error-details.component.css']
})
export class ErrorDetailsComponent implements OnInit {

    errorId: string;
    error: Error;

    constructor(private route: ActivatedRoute,
                private errorService: ErrorsService) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.errorId = params['errorId'];
        });
        this.errorService.getErrorData(this.errorId)
            .subscribe(
                errorData => this.error = errorData,
                error => console.log(error)
            );
    }

    public onErrorEdited(error: Error) {
        this.errorService.editError(error)
            .subscribe(
                errorData => { if(errorData) { this.error = errorData} },
                error => console.log(error)
            )
    }
}
