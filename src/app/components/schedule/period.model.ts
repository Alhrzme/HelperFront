export class Period {
    id:number;
    duration: number;
    real_duration: number;
    description:string;
    start:string;
    end:string;

    constructor(duration:number, description:string) {
        this.duration = duration;
        this.description = description;
    }
}