import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {NotesRoutingModule} from "./notes-routing.module";
import {NotesHomeComponent} from './notes-home/notes-home.component';
import {NotesComponent} from "./notes.component";
import {NotesFormComponent} from './notes-form/notes-form.component';
import {NotesListComponent} from './notes-list/notes-list.component';
import {NotesListItemComponent} from './notes-list/notes-list-item/notes-list-item.component';
import {NotesService} from "./notes.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        NotesRoutingModule
    ],
    declarations: [
        NotesComponent,
        NotesHomeComponent,
        NotesFormComponent,
        NotesListComponent,
        NotesListItemComponent
    ],
    providers: [
        NotesService
    ]
})
export class NotesModule {
}
