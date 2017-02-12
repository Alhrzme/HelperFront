export class Period {
    id: number;
    description: string;
    begin: string;
    end: string;

    constructor(begin: string, end:string, description: string) {
        this.begin = begin;
        this.end = end;
        this.description = description;
    }
}