import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../note.model";

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

    @Input() notes: Note[];
    @Output() removed: EventEmitter<Note> = new EventEmitter<Note>();

    constructor() {
    }

    ngOnInit() {
    }

    onNoteRemoved(note: Note) {
        this.removed.emit(note);
    }

}
