export class Task {
	id: number;
	body: string;
	title: string;
	children: Task[];
	parent: Task;

	constructor( body: string, title: string) {
		this.body = body;
		this.title = title;
	}
}