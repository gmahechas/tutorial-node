import { PostEntity } from '../../entities';
import { GetByIdPostDto } from '../../dtos';
import { PostRepository } from '../../repositories';

export interface IGetByIdPostUseCase {
	execute(dto: GetByIdPostDto): Promise<PostEntity>;
}

export class GetByIdPostUseCase implements IGetByIdPostUseCase {
	constructor(
		private readonly postRepository: PostRepository,
	) { }

	execute(dto: GetByIdPostDto): Promise<PostEntity> {
		return this.postRepository.getById(dto);
	}
}