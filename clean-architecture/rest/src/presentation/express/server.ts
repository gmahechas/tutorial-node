import express, { Application, Router, json, urlencoded } from 'express';
import compression from 'compression';
import { errorHandler, registerAsyncHandler } from './helpers';

interface Options {
	port: number,
	router: Router
}

export class Server {

	private readonly app: Application;
	private readonly port: number;
	private readonly router: Router;

	constructor(options: Options) {
		this.app = express();
		this.app.use(json());
		this.app.use(urlencoded({ extended: true }));
		this.app.use(compression())
		this.port = options.port;
		this.router = options.router;
	}

	public async start() {
		this.app.use(this.router);
		registerAsyncHandler(this.router.stack);
		this.app.use(errorHandler);
		this.app.listen(this.port, () => console.log(`Listening on port ${this.port}`));
	}
}