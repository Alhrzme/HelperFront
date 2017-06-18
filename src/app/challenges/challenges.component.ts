import {Component, OnInit} from '@angular/core';
import {Challenge} from "./challenge.model";
import {ChallengesService} from "./challenges.service";

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
    title: string = 'Испытания';
    challenges: Challenge[];
    constructor(private challengesService: ChallengesService) {
    }

    ngOnInit() {
        this.challengesService.getChallenges().subscribe(
            challenges => {
                this.challenges = challenges;
            },
            error => console.log(error)
        );
    }

    onChallengeCreated(challenge: Challenge) {
        this.challengesService.addChallenge(challenge).subscribe(
            challenge => {
                this.challenges.push(challenge);
            },
            error => console.log(error)
        );
    }

    onChallengeDeleted(challenge: Challenge) {
        let challengeIndex = this.challenges.indexOf(challenge);
        this.challengesService.removeChallenge(challenge).subscribe(
            challenge => {
                if (challengeIndex > -1) {
                    this.challenges.splice(challengeIndex, 1);
                }
            },
            error => console.log(error)
        );
    }

    onChallengeEdited(challenge:Challenge) {
        this.challengesService.editChallenge(challenge).subscribe(
            challenge => {},
            error => console.log(error)
        );
    }

}
