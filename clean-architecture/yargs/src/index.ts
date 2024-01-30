import { args } from './adapters/args.adapter';
import { ServerApp } from './presentation/server';

(async (args) => {
	ServerApp.run(args);
})(args)