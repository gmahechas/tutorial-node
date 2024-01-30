import { Router } from 'express';
import { PostController } from './post.controller';

export class PostRoutes {

	public router: Router = Router();
	private postController: PostController = new PostController();

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.get('/', this.postController.getPosts);
	}
}