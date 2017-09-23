import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html',
    styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

    constructor(private dialogRef: MdDialogRef<AlertModalComponent>) {
    }

    onYesClick() {
        this.dialogRef.close(true)
    }

    ngOnInit() {
    }

}
