import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
	response.status(500).json({ success: false, message: 'Internal Server Error', error: { code: 500 } })
};