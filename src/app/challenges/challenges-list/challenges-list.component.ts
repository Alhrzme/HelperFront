import {Component, OnInit} from '@angular/core';
import {Challenge} from "../challenge.model";
import {ChallengesService} from "../challenges.service";

@Component({
    selector: 'app-challenges-list',
    templateUrl: './challenges-list.component.html',
    styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
    title: string = 'Испытания';
    challenges: Challenge[] = [];

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

}
