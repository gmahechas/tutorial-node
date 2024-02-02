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

		new GetAllPostUseCase(this.postRepository).execute(getAllPostDto)
			.then((posts) => {
				response.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
			})
			.catch((error) => {
				response.status(500).json({ error });
			});
	}

	public getById = async (request: Request, response: Response): Promise<void> => {
		const [errors, getByIdPostDto] = GetByIdPostDto.create({ postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		const post = await new GetByIdPostUseCase(this.postRepository).execute(getByIdPostDto);
		response.status(200).json({ post });
	}

	public create = async (request: Request, response: Response): Promise<void> => {
		const [errors, createPostDto] = CreatePostDto.create(request.body);
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		const post = await new CreatePostUseCase(this.postRepository).execute(createPostDto);
		response.status(200).json({ post });
	}

	public update = async (request: Request, response: Response): Promise<void> => {
		const [errors, updatePostDto] = UpdatePostDto.create({ ...request.body, postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		const post = await new UpdatePostUseCase(this.postRepository).execute(updatePostDto);
		response.status(200).json({ post });
	}

	public delete = async (request: Request, response: Response): Promise<void> => {
		const [errors, deletePostDto] = DeletePostDto.create({ postId: +request.params.postId });
		if (errors) {
			response.status(400).json({ success: false, message: 'Bad Request', error: { code: 400, errors } });
			return;
		}

		const post = await new DeletePostUseCase(this.postRepository).execute(deletePostDto);
		response.status(200).json({ post });
	}
}