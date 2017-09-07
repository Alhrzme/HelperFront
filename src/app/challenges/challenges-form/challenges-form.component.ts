import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from "../challenge.model";
import {Task} from "../../tasks/taskData/shared/models/task.model";
import {TaskService} from "../../tasks/taskData/shared/services/tasks.service";
import {TimeHelper} from "../../shared/services/time-helper.service";
import * as moment from "moment";

@Component({
    selector: 'app-challenges-form',
    templateUrl: './challenges-form.component.html',
    styleUrls: ['./challenges-form.component.css']
})
export class ChallengesFormComponent implements OnInit {
    @Input() challenge: Challenge;
    @Output() created: EventEmitter<Challenge> = new EventEmitter<Challenge>();
    tasks: Task[];

    constructor(private tasksService: TaskService) {
    }

    ngOnInit() {
        if (!this.challenge) {
            this.setInitData();
        }

        this.tasksService.getTasks().subscribe(
            tasks => this.tasks = tasks,
            error => console.log(error)
        );
    }

    setInitData() {
        this.challenge = new Challenge();
        this.challenge.begin = moment().format(TimeHelper.INPUT_DATE_FORMAT);
        this.challenge.end = moment().add('7', 'days').format(TimeHelper.INPUT_DATE_FORMAT);
    }

    onSubmit() {
        let challenge = JSON.parse(JSON.stringify(this.challenge));
        challenge.begin = TimeHelper.getFormattedDateString(challenge.begin);
        challenge.end = TimeHelper.getFormattedDateString(challenge.end);
        this.created.emit(challenge);
        this.setInitData();
    }
}
