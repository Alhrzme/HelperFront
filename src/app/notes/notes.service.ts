import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Observable} from "rxjs";
import {Note} from "./note.model";
import {Http} from "@angular/http";

@Injectable()
export class NotesService extends BaseService {
    urlEnd:string = 'notes';
    entityName = 'note';

    constructor(protected http: Http) {
        super();
    }

    addNote(note : Note): Observable<Note> {
        return this.post(note);
    }

    getNotes() {
        return this.gets()
    }

    getNote(id:number) {
        return this.get(id);
    }

    editNote(note: Note): Observable<Note> {
        return this.put(note);
    }

    deleteNote (note : Note): Observable<Note> {
        return this.httpDelete(note);
    }
}
