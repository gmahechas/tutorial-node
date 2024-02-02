import { Router } from 'express';
import { PostController } from './post.controller';
import { PostDatasourceImpl } from '../../../infrastructure/datasource';
import { PostRepositoryImpl } from '../../../infrastructure/repositories';

export class PostRoutes {

	public router: Router = Router();
	private postDatasource: PostDatasourceImpl = new PostDatasourceImpl();
	private postRepository: PostRepositoryImpl = new PostRepositoryImpl(this.postDatasource);
	private postController: PostController = new PostController(this.postRepository);

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.get('/', this.postController.getAll);
		this.router.get('/:postId', this.postController.getById);
		this.router.post('/', this.postController.create);
		this.router.patch('/:postId', this.postController.update);
		this.router.delete('/:postId', this.postController.delete);
	}
}