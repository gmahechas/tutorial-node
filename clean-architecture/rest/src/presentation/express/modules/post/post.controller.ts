import { Request, Response } from 'express';
import { CreatePostDto } from '../../../../domain/dtos/modules/post/create-post.dto';
import { UpdatePostDto } from '../../../../domain/dtos/modules/post/update-post.dto';

export class PostController {

	public getPosts = async (request: Request, response: Response): Promise<void> => {
		response.status(200).send('hello from posts controller');
	}

	public createPost = async (request: Request, response: Response): Promise<void> => {
		const [errors, createPostDto] = CreatePostDto.create(request.body);
		if (errors) {
			response.status(400).send({ errors });
			return;
		}

		console.log(createPostDto);

		response.status(200).send('hello from create post controller');
	}

	public updatePost = async (request: Request, response: Response): Promise<void> => {
		const [errors, updatePostDto] = UpdatePostDto.create({ ...request.body, postId: +request.params.postId });
		if (errors) {
			response.status(400).send({ errors });
			return;
		}

		console.log(updatePostDto.values);

		response.status(200).send('hello from update post controller');
	}
}