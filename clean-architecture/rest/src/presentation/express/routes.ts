import { Router } from 'express';
import { PostRoutes } from './post';

export class Routes {

	public router: Router = Router();
	private postRoutes: PostRoutes = new PostRoutes();

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.use('/post', this.postRoutes.router);
	}
}