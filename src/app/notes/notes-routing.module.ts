import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NotesComponent} from "./notes.component";
import {NotesHomeComponent} from "./notes-home/notes-home.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'notes',
                component: NotesComponent,
                children: [
                    {
                        path: '',
                        component: NotesHomeComponent
                    }
                ]
            }
        ])
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class NotesRoutingModule {
}
