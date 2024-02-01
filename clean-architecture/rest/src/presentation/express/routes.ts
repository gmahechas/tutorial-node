import { Router } from 'express';
import { PostRoutes } from './modules/post';
import { CommentRoutes } from './modules/comment';

export class Routes {

	public router: Router = Router();
	private postRoutes: PostRoutes = new PostRoutes();
  private commentRoutes: CommentRoutes = new CommentRoutes();

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.use('/post', this.postRoutes.router);
		this.router.use('/comment', this.commentRoutes.router);
	}
}