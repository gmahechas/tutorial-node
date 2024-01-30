import { Request, Response, NextFunction } from 'express';

export const asyncHandler = (
	callback: (request: Request, response: Response, next: NextFunction) => Promise<void>
) => async (request: Request, response: Response, next: NextFunction) => {
	try {
		await callback(request, response, next);
	} catch (error) {
		next(error);
	}
};

export const registerAsyncHandler = (stack: any[]) => {
	stack.forEach((layer) => {
		if (['router', 'bound dispatch'].includes(layer.name)) {
			const stack = layer.handle &&layer.handle.stack ? layer.handle.stack : layer.route.stack;
			registerAsyncHandler(stack);
		}
		layer.handle = asyncHandler(layer.handle);
	})
}