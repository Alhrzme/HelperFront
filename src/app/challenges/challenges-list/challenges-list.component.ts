import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from "../challenge.model";
import {ChallengesService} from "../challenges.service";

@Component({
    selector: 'app-challenges-list',
    templateUrl: './challenges-list.component.html',
    styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
    @Input() challenges: Challenge[] = [];
    @Output() deleted:EventEmitter<Challenge> = new EventEmitter<Challenge>();
    @Output() edited:EventEmitter<Challenge> = new EventEmitter<Challenge>();
    editedChallengeId: number;
    constructor() {

    }

    ngOnInit() {
    }

    onChallengeDeleted(challenge: Challenge) {
        this.deleted.emit(challenge);
    }

    onChallengeEdited(challenge: Challenge) {
        this.edited.emit(challenge);
    }

    showForm(challenge: Challenge) {
        this.editedChallengeId = challenge.id;
    }

    isChallengeEdit(challenge: Challenge) {
        return challenge.id == this.editedChallengeId;
    }
}
