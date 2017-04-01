import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-task-move-modal',
    templateUrl: './task-move-modal.component.html',
    styleUrls: ['./task-move-modal.component.css']
})
export class TaskMoveModalComponent implements OnInit {

    data: number;
    moveDayList = [
        {value: 1, title: 'На день вперед'},
        {value: 2, title: 'На 2 дня вперед'},
        {value: 3, title: 'На 3 дня вперед'},
        {value: 7, title: 'На неделю вперед'},
        {value: 14, title: 'На 2 недели вперед'},
        {value: 28, title: 'На 4 недели вперед'},
    ];
    selectedVal :number = this.moveDayList[0].value;

    getMoveDaysOptions() {
        let data = this.data;
        return this.moveDayList.filter(function (option) {
            return option.value <= data;
        });
    }

    constructor(private dialogRef: MdDialogRef<TaskMoveModalComponent>) {
    }

    moveTask() {
        this.dialogRef.close(this.selectedVal)
    }
    
    ngOnInit() {
    }

}
