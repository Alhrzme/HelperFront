import {Component, OnInit} from '@angular/core';
import {Note} from "../note.model";
import {NotesService} from "../notes.service";

@Component({
    selector: 'app-notes-home',
    templateUrl: './notes-home.component.html',
    styleUrls: ['./notes-home.component.css']
})
export class NotesHomeComponent implements OnInit {

    notes: Note[];
    constructor(private notesService: NotesService) {
    }

    ngOnInit() {
    }

    onCreated(note: Note) {
        this.notesService.addNote(note).subscribe(
            note => {
                this.notes = this.notes.concat([note]);
            },
            error => console.log(error)
        );
    }
}
