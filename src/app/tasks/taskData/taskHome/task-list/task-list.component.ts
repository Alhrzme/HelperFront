import {Component, EventEmitter, Input, Output} from '@angular/core';

import {TaskService} from "../../shared/services/tasks.service";
import {TaskEntry} from "../../shared/models/task-entry.model";
import {TimeHelper} from "../../../../shared/services/time-helper.service";

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
    providers: [TaskService]
})

export class TaskListComponent {
    @Input() lineLengths;
    @Input() date;
    @Input() taskEntries: TaskEntry[];
    @Output() deleted: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() edited: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() confirmed: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    showAllTasks = false;

    getShownTasks() {
        return this.showAllTasks ? this.taskEntries : this.taskEntries.filter((taskEntry: TaskEntry) => {
            const currentTime = TimeHelper.getCurrentTime();
            const taskBeginTime = taskEntry.task.beginTime;

            return !taskBeginTime
                || currentTime.isSameOrAfter(TimeHelper.getMomentTime(taskBeginTime))
                || currentTime.format(TimeHelper.DATE_FORMAT) !== taskEntry.date;
        });
    }

    showToggleVisibilityButton() {
        return this.getShownTasks().length !== this.taskEntries.length && !this.showAllTasks;
    }

    toggleTaskVisibility() {
        this.showAllTasks = !this.showAllTasks;
    }

    getLineLengthById(taskId) {
        return this.lineLengths && this.lineLengths[taskId] ? this.lineLengths[taskId] : 0;
    }

    onTaskEdited(task: TaskEntry) {
        this.edited.emit(task);
    }

    onTaskEntryConfirmed(entry: TaskEntry): void {
        this.edited.emit(entry);
    }

    onTaskDeleted(task: TaskEntry): void {
        this.deleted.emit(task);
    }
}