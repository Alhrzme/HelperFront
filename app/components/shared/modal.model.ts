export class Modal {
    title : string;
    body : string;
    icon : string;

    constructor( body: string = 'Точно удалить?', title: string = 'Удалить?', icon : string = 'remove') {
        this.body = body;
        this.title = title;
        this.icon = icon;
    }
}