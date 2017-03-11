import {Component, OnInit, Input} from '@angular/core';
import {Error} from "../../shared/error.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-errors-list-item',
    templateUrl: './errors-list-item.component.html',
    styleUrls: ['./errors-list-item.component.css']
})
export class ErrorsListItemComponent implements OnInit {

    @Input() error: Error;

    constructor(private router: Router) {
    }

    onSelect() {
        this.router.navigate(['/errors', this.error.id]);
    }

    ngOnInit() {
    }

}
