
export class Period {
    id: number;
    description: string;
    begin: string;
    end: string;

    constructor(begin: string = null, end:string = null, description: string = null ) {
        this.begin = begin;
        this.end = end;
        this.description = description;
    }

}