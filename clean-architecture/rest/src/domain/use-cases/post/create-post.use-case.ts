import { CreatePostDto, PostEntity, PostRepository } from '../..';

export interface ICreatePostUseCase {
	execute(dto: CreatePostDto): Promise<PostEntity>;
}

export class CreatePostUseCase implements ICreatePostUseCase {
	constructor(
		private readonly postRepository: PostRepository,
	) { }

	execute(dto: CreatePostDto): Promise<PostEntity> {
		return this.postRepository.create(dto);
	}
}