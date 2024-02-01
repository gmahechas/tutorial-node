import { Request, Response } from 'express';
import { CreatePostDto, CreatePostUseCase, PostRepository } from '../../../../domain';
import { UpdatePostDto } from '../../../../domain';

export class PostController {

	constructor(
		private readonly postRepository: PostRepository,
	) { }

	public getAll = async (request: Request, response: Response): Promise<void> => {
		new CreatePostUseCase(this.postRepository).execute({
			title: 'title',
			content: 'content',
		}).then((post) => {
			response.status(200).json(post);
		}).catch((error) => {
			response.status(500).json(error);
		})
	}

	public getById = async (request: Request, response: Response): Promise<void> => {
		const post = await this.postRepository.getById(+request.params.postId);
		response.status(200).json({ post });
	}

	public create = async (request: Request, response: Response): Promise<void> => {
		const [errors, createPostDto] = CreatePostDto.create(request.body);
		if (errors) {
			response.status(400).json(errors);
			return;
		}

		const post = await this.postRepository.create(createPostDto);
		response.status(200).send(post);
	}

	public update = async (request: Request, response: Response): Promise<void> => {
		const [errors, updatePostDto] = UpdatePostDto.create({ ...request.body, postId: +request.params.postId });
		if (errors) {
			response.status(400).json(errors);
			return;
		}

		const post = await this.postRepository.update(updatePostDto);
		response.status(200).send(post);
	}

	public delete = async (request: Request, response: Response): Promise<void> => {
		const post = await this.postRepository.delete(+request.params.postId);
		response.status(200).send(post);
	}
}