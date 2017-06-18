import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../note.model";

@Component({
    selector: 'app-notes-list-item',
    templateUrl: './notes-list-item.component.html',
    styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent implements OnInit {

    @Input() note: Note;
    @Output() removed: EventEmitter<Note> = new EventEmitter<Note>();
    @Output() editable: EventEmitter<Note> = new EventEmitter<Note>();
    isContentShow : boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    switchContentVisibility() {
        this.isContentShow = !this.isContentShow;
    }

    remove() {
        this.removed.emit(this.note);
    }

    change() {
        this.editable.emit(this.note);
    }
}
