import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../user.model";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    user:User = new User();
    @Output() loginEntered:EventEmitter<User> = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log('submit login');
        this.loginEntered.emit(this.user);
    }
}
