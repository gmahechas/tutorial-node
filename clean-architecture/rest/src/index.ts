import { Server } from './presentation/express/server';
import { Routes } from './presentation/express/routes';
import { envs } from './adapters/env';

(async () => {
	const { router } = new Routes();
	new Server({ port: envs.PORT, router }).start();
})()