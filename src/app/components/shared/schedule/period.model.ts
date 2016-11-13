export class Period {
    id:number;
    duration: number;
    real_duration: number;
    description:string;
    internal_number: number;

    constructor(duration:number, description:string) {
        this.duration = duration;
        this.description = description;
    }
}