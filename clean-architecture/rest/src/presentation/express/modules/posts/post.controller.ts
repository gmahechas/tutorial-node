import { Request, Response } from 'express';

export class PostController {

	public getPosts = async (request: Request, response: Response): Promise<void> =>{
		response.status(200).send('hello from posts controller');
	}
}