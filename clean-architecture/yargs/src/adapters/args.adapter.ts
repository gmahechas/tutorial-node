import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface Args {
	base: number;
}

export const args = yargs(hideBin(process.argv))
	.option('base', {
		alias: 'b',
		demandOption: true,
		describe: 'Base number',
		type: 'number',
	}).check((args) => {
		if (!Number.isInteger(args.base)) {
			throw new Error('The base must be an integer');
		}

		if (args.base < 0) {
			throw new Error('The base must be a positive number');
		}
		return true;
	}).parseSync() as unknown as Args;