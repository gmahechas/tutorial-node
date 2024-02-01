import { CreatePostDto, PostEntity, PostRepository, UpdatePostDto } from '../..';

export interface IUpdatePostUseCase {
	execute(dto: UpdatePostDto): Promise<PostEntity>;
}

export class UpdatePostUseCase implements IUpdatePostUseCase {
	constructor(
		private readonly postRepository: PostRepository,
	) { }

	execute(dto: UpdatePostDto): Promise<PostEntity> {
		return this.postRepository.update(dto);
	}
}