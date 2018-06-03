import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Observable} from "rxjs";
import {Note} from "./note.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NotesService extends BaseService {
    urlEnd:string = 'notes';
    entityName = 'note';

    constructor(protected http: HttpClient) {
        super();
    }

    addNote(note : Note) {
        return this.post(note);
    }

    getNotes() {
        return this.gets()
    }

    getNote(id:number) {
        return this.get(id);
    }

    editNote(note: Note) {
        return this.put(note);
    }

    deleteNote (note : Note) {
        return this.httpDelete(note);
    }
}
