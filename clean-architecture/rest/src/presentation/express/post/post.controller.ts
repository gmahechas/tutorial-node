import { Request, Response } from 'express';
import { PostRepository } from '../../../domain/repositories';
import { CreatePostUseCase, DeletePostUseCase, GetAllPostUseCase, GetByIdPostUseCase, UpdatePostUseCase } from '../../../domain/use-cases';
import { CreatePostDto, UpdatePostDto, DeletePostDto, GetAllPostDto, GetByIdPostDto } from '../../../domain/dtos';

export class PostController {

	constructor(
		private readonly postRepository: PostRepository,
	) { }

	public getAll = (request: Request, response: Response) => {
		const [errors, getAllPostDto] = GetAllPostDto.create();
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		new GetAllPostUseCase(this.postRepository)
			.execute(getAllPostDto)
			.then((posts) => response.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts }));
	}

	public getById = (request: Request, response: Response): void => {
		const [errors, getByIdPostDto] = GetByIdPostDto.create({ postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		new GetByIdPostUseCase(this.postRepository)
			.execute(getByIdPostDto)
			.then((post) => response.status(200).json({ success: true, message: 'Post fetched successfully', data: post }));
	}

	public create = (request: Request, response: Response): void => {
		const [errors, createPostDto] = CreatePostDto.create(request.body);
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		new CreatePostUseCase(this.postRepository)
			.execute(createPostDto)
			.then((post) => response.status(200).json({ success: true, message: 'Post created successfully', data: post }));
	}

	public update = (request: Request, response: Response): void => {
		const [errors, updatePostDto] = UpdatePostDto.create({ ...request.body, postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		new UpdatePostUseCase(this.postRepository)
			.execute(updatePostDto)
			.then((post) => response.status(200).json({ success: true, message: 'Post updated successfully', data: post }));
	}

	public delete = (request: Request, response: Response): void => {
		const [errors, deletePostDto] = DeletePostDto.create({ postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		new DeletePostUseCase(this.postRepository)
			.execute(deletePostDto)
			.then((post) => response.status(200).json({ success: true, message: 'Post deleted successfully', data: post }));
	}
}