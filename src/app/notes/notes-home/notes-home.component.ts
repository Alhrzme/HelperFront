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
        this.notesService.getNotes().subscribe(
            notes => this.notes = notes,
            error => console.log(error)
        )
    }

    onCreated(note: Note) {
        this.notesService.addNote(note).subscribe(
            note => {
                if (!this.notes) {
                    this.notes = [];
                }
                this.notes = this.notes.concat([note]);
            },
            error => console.log(error)
        );
    }

    onRemoved(note: Note) {
        let noteIndex = this.notes.indexOf(note);
        this.notesService.deleteNote(note)
            .subscribe(
                note => {
                    if (noteIndex > -1) {
                        this.notes.splice(noteIndex, 1);
                    }
                },
                error => console.log(error)
            );
    }
}
