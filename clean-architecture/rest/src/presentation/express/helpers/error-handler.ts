import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
	response.status(500).send('there was an error' + error.message);
};