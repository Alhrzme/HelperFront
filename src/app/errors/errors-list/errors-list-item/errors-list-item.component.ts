import {Component, OnInit, Input} from '@angular/core';
import {Error} from "../../shared/error.model";

@Component({
    selector: 'app-errors-list-item',
    templateUrl: './errors-list-item.component.html',
    styleUrls: ['./errors-list-item.component.css']
})
export class ErrorsListItemComponent implements OnInit {

    @Input() error: Error;

    constructor() {
    }

    ngOnInit() {
    }

}
