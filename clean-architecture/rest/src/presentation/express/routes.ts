import { Router } from 'express';
import { PostRoutes } from './modules/posts/post.routes';
import { CommentRoutes } from './modules/comments/comment.routes';

export class Routes {

	public router: Router = Router();
	private postRoutes: PostRoutes = new PostRoutes();
  private commentRoutes: CommentRoutes = new CommentRoutes();

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.use('/posts', this.postRoutes.router);
		this.router.use('/comments', this.commentRoutes.router);
	}
}