import {DateCondition} from "../../../../shared/models/date-condition.model";

export class Task {
    id:number;
    title:string;
    description:string;
    beginTime: string;
    endTime: string;
    isCompleted: boolean;
    condition: DateCondition;

    constructor(title: string = null) {
        this.title = title;
        this.condition = new DateCondition();
    }
}