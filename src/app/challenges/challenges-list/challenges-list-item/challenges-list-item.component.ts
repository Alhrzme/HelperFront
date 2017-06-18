import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from "../../challenge.model";
import {TimeHelper} from "../../../shared/services/time-helper.service";

@Component({
    selector: 'app-challenges-list-item',
    templateUrl: './challenges-list-item.component.html',
    styleUrls: ['./challenges-list-item.component.css']
})
export class ChallengesListItemComponent implements OnInit {
    @Input() challenge: Challenge;
    @Output() deleted: EventEmitter<Challenge> = new EventEmitter<Challenge>();
    @Output() edited: EventEmitter<Challenge> = new EventEmitter<Challenge>();

    constructor() {
    }

    ngOnInit() {
    }

    showFormattedDate(date) {
        return TimeHelper.getFormattedDateString(date, TimeHelper.DATE_FORMAT, 'DD.MM.YYYY');
    }

    editChallenge() {
        this.edited.emit(this.challenge);
    }

    removeChallenge() {
        this.deleted.emit(this.challenge);
    }
}
