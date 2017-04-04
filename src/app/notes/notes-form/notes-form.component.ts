import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../note.model";

@Component({
    selector: 'app-notes-form',
    templateUrl: './notes-form.component.html',
    styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {

    @Input() note: Note = new Note();
    @Output() created: EventEmitter<Note> = new EventEmitter<Note>();
    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.note);
    }
}
