import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html',
    styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AlertModalComponent>) {
    }

    onYesClick() {
        this.dialogRef.close(true)
    }

    onCloseClick() {
        this.dialogRef.close(false)
    }

    ngOnInit() {
    }

}
