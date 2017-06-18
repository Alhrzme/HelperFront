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
    @Output() edited: EventEmitter<Note> = new EventEmitter<Note>();

    editableNoteId:number;

    constructor() {
    }

    ngOnInit() {
    }

    onNoteRemoved(note: Note) {
        this.removed.emit(note);
    }

    changeListItemState(note: Note) {
        this.editableNoteId = note.id;
    }

    onNoteChanged(note: Note) {
        this.editableNoteId = null;
        this.edited.emit(note);
    }

    isNoteEdited(note: Note) {
        return note.id === this.editableNoteId;
    }
}
