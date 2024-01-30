import fs from 'fs';

export interface SaveTableOptions {
	fileContent: string;
	fileDestination?: string;
	fileName?: string;
}

export interface SaveTableCase {
	execute(options: SaveTableOptions): boolean;
};

export class SaveTable implements SaveTableCase {

	constructor() { }

	public execute({ fileContent, fileDestination = 'tables', fileName = 'table.txt' }: SaveTableOptions): boolean {
		fs.mkdirSync(fileDestination, { recursive: true });
		fs.writeFileSync(`${fileDestination}/${fileName}`, fileContent);
		return true;
	}
}