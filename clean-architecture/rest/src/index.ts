import { Server } from './presentation/express/server';
import { Routes } from './presentation/express/routes';
import { envs } from './adapters/env';

(async () => {
	const { router } = new Routes();
	new Server({ port: envs.PORT, router }).start();

	/* ######################################## */
	/* 	process.on('uncaughtException', (error) => {
			console.error('Uncaught exception')
		});
	
		setTimeout(() => {
			// @ts-ignore
			uncaughtException();
		}, 1000); */

	/* ######################################## */
	/* 	process.on('unhandledRejection', (error) => {
			console.error('unhandled rejection');
		});
	
		setTimeout(() => {
			new Promise((_, reject) => setTimeout(() => reject(new Error('Simulated rejection')), 2000));
		}, 2000); */

	/* ######################################## ctrl + c*/
/* 	process.on('SIGINT', () => {
		console.log('SIGINT::: cleaning up...');
		// 1. close express server
		// 2. close database connections
		// 3. close kafka connections
		// 4. cleanup streams
		// writeStream.end(() => {
		// 	console.log('Stream de archivo cerrado correctamente.');
		// });
		// 5. cleanup temp files
		// fs.unlink(tempFilePath, (err) => {
		// 	if (err) throw err;
		// 	console.log('Archivo temporal eliminado.');
		// });
		console.log('SIGINT::: shutting down...');
		process.exit(0);
	}); */

	/* ######################################## unix default*/
/* 	process.on('SIGTERM', (code) => {
		console.log('SIGTERM::: cleaning up...');

		// 1. close express server
		// 2. close database connections
		// 3. close kafka connections
		// 4. cleanup streams
		// writeStream.end(() => {
		// 	console.log('Stream de archivo cerrado correctamente.');
		// });
		// 5. cleanup temp files
		// fs.unlink(tempFilePath, (err) => {
		// 	if (err) throw err;
		// 	console.log('Archivo temporal eliminado.');
		// });

		console.log('SIGTERM::: shutting down...');
		process.exit(0);
	}); */

	/* ######################################## */
	/* 	process.on('exit', (code) => {
			console.log(`process is about to exit with code: ${code}`);
		}); */

	/* ######################################## */
	/* 	process.on('warning', (warning) => {
			console.warn('warning detected:', warning.name, warning.message);
			console.warn(warning.stack);
		}); */

})()