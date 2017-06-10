import {DateCondition} from "../../../../shared/models/date-condition.model";
import {IDateCondition} from "../../../../shared/common/IDateCondition";

export class Task implements IDateCondition{
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