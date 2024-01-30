import { Router } from 'express';
import { CommentController } from './comment.controller';

export class CommentRoutes {

	public router: Router = Router();
	private commentController: CommentController = new CommentController();

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes() {
		this.router.get('/', this.commentController.getComments);
	}
}