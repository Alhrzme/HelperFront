export class Task {
	id: number;
	body: string;
	title: string;

	constructor( body: string, title: string) {
		this.body = body;
		this.title = title;
	}
}