import { DeletePostDto } from '../../dtos';
import { PostEntity } from '../../entities';
import { PostRepository } from '../../repositories';

export interface IDeletePostUseCase {
	execute(dto: DeletePostDto): Promise<PostEntity>;
}

export class DeletePostUseCase implements IDeletePostUseCase {
	constructor(
		private readonly postRepository: PostRepository,
	) { }

	execute(dto: DeletePostDto): Promise<PostEntity> {
		return this.postRepository.delete(dto);
	}
}