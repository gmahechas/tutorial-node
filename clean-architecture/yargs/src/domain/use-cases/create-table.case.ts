export interface CreateTableOptions {
	base: number;
}

export interface CreateTableCase {
	execute(options: CreateTableOptions): string;
}

export class CreateTable implements CreateTableCase {

	constructor() { }

	public execute({ base }: CreateTableOptions) {
		let outputMessage = '';
		for (let i = 1; i <= 10; i++) {
			outputMessage += `${base} x ${i} = ${base * i}\n`;
		}
		return outputMessage;
	}
}