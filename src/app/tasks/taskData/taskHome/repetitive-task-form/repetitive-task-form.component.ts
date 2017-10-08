import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import {Task} from "../../shared/models/task.model";
import {TimeHelper} from "../../../../shared/services/time-helper.service";
import {DaysOfWeek} from "../../../../shared/common/DaysOfWeek";
import {MdAutocompleteSelectedEvent} from "@angular/material";

@Component({
    selector: 'repetitive-task-form',
    templateUrl: './repetitive-task-form.component.html',
    styleUrls: ['./repetitive-task-form.component.css']
})
export class RepetitiveTaskFormComponent implements OnInit {

    @Input() task: Task = new Task();
    @Input() tasksOptions;
    date: string;
    filteredOptions = [];
    @Output() created: EventEmitter<Task> = new EventEmitter<Task>();
    daysOfWeek = DaysOfWeek.getDaysOfWeek();
    isSelected = false;
    selectedTask: Task;

    weekFrequencyData = DaysOfWeek.getWeekFrequencyData();

    deadlineStringList = [
        {value: 0, title: 'В тот же день'},
        {value: 1, title: 'Через 1 день'},
        {value: 2, title: 'Через 2 дня'},
        {value: 3, title: 'Через 3 дня'},
        {value: 4, title: 'Через 4 дня'},
        {value: 5, title: 'Через 5 дней'},
    ];

    constructor() {
    }

    onSubmit() {
        if (this.selectedTask) {
            this.task.title = this.selectedTask.title;
        }
        if (this.isSelected) {
            this.task.id = this.selectedTask.id;
        }

        this.task.description = this.task.title;

        if (this.task.condition.beginDate) {
            this.task.condition.beginDate = TimeHelper.getFormattedDateString(this.task.condition.beginDate);
        }
        if (this.task.condition.endDate) {
            this.task.condition.endDate = TimeHelper.getFormattedDateString(this.task.condition.endDate);
        }
        this.created.emit(this.task);
        this.task = new Task();
        this.setInitDates();
    }

    onTaskTitleChanged() {
        this.filteredOptions = this.tasksOptions.filter((task) => {
            const taskName = task.title;
            return (this.tasksOptions.length < 100
                ? taskName.indexOf(this.task.title) > -1
                : taskName.startsWith(this.task.title));
        });

        const taskTitle = this.task.title['id'] ? this.task.title['title'] : this.task.title.replace(' ', '');
        if (this.selectedTask) {
            if (this.selectedTask.title != taskTitle) {
                delete this.task.id;
                this.isSelected = false;
            } else {
                this.setSelectedTask(this.selectedTask);
            }
        }
    }

    ngOnInit() {
        this.setInitDates();
        this.task.condition.weekFrequency = 1;
    }

    setInitDates() {
        this.task.condition.beginDate = moment().format(TimeHelper.INPUT_DATE_FORMAT);
        this.task.condition.endDate = moment().add(1, 'months').format(TimeHelper.INPUT_DATE_FORMAT);
    }

    displayFn(task: Task): string {
        return task ? task.title : '';
    }

    onSelected(event: MdAutocompleteSelectedEvent) {
        const selectedTask = event.option.value;

        this.setSelectedTask(selectedTask);
    }

    setSelectedTask(selectedTask: Task) {
        this.task.beginTime = selectedTask.beginTime;
        this.task.endTime = selectedTask.endTime;
        this.selectedTask = selectedTask;
        this.isSelected = true;
    }
}