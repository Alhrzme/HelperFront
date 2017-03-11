import {Component, OnInit, Input} from '@angular/core';
import {Error} from "../shared/error.model";

@Component({
    selector: 'app-errors-list',
    templateUrl: './errors-list.component.html',
    styleUrls: ['./errors-list.component.css']
})
export class ErrorsListComponent implements OnInit {

    @Input() errors: Error[];

    constructor() {
    }

    ngOnInit() {
    }

}
