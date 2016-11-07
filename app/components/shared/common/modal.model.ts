export class Modal {
    title : string;
    body : string;
    icon : string;

    constructor(title: string = 'Удалить?', icon : string = 'remove', body: string = 'Уверены?' ) {
        this.body = body;
        this.title = title;
        this.icon = icon;
    }
}