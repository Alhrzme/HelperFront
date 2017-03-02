import {AbstractTask} from "./abstract-task.model";

export class RepetitiveTask extends AbstractTask {
    frequency:number;

    constructor(title?:string, frequency?:number) {
        super();
        this.title = title;
        this.frequency = frequency;
    }
}