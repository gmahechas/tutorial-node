import { Request, Response } from 'express';
import { CreatePostDto } from '../../../../domain/dtos/modules/post/create-post.dto';

export class PostController {

	public getPosts = async (request: Request, response: Response): Promise<void> => {
		response.status(200).send('hello from posts controller');
	}
	
	public createPost = async (request: Request, response: Response): Promise<void> => {
		const createDTO = CreatePostDto.create(request.body);
		response.status(200).send('hello from create post controller');
	}
}