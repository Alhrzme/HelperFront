import {Component, OnInit, Input} from '@angular/core';
import {Listener} from "../shared/listener.model";

@Component({
    selector: 'app-listeners-list',
    templateUrl: './listeners-list.component.html',
    styleUrls: ['./listeners-list.component.css']
})
export class ListenersListComponent implements OnInit {

    @Input() listeners: Listener[];

    constructor() {
    }

    ngOnInit() {
    }

}
