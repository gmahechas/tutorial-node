import { Args } from '../adapters/args.adapter';
import { CreateTable } from '../domain/use-cases/create-table.case';
import { SaveTable } from '../domain/use-cases/save-table.case';

export class ServerApp {
	public static run({ base }: Args) {

		const table = new CreateTable().execute({ base });
		const wasFileCreated = new SaveTable().execute({ fileContent: table });
	}
}