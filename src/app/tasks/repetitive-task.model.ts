export class RepetitiveTask {
    id: number;
    title: string;
    frequency:number;

    constructor(title?:string, frequency?:number) {
        this.title = title;
        this.frequency = frequency;
    }
}