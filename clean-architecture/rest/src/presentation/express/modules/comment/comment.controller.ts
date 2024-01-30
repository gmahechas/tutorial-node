import { Request, Response } from 'express';

export class CommentController {

	public getComments = async (request: Request, response: Response): Promise<void> => {
		response.status(200).send('hello from comment controller');
	}
}