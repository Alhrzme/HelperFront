import {Component, OnInit} from '@angular/core';
import {Challenge} from "./challenge.model";
import {ChallengesService} from "./challenges.service";

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

    constructor(private challengesService: ChallengesService) {
    }

    ngOnInit() {
    }

    onChallengeCreated(challenge: Challenge) {
        this.challengesService.addChallenge(challenge).subscribe(
            challenge => {},
            error => console.log(error)
        );
    }

}
