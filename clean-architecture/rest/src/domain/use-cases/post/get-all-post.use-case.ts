import { PostEntity } from '../../entities';
import { GetAllPostDto } from '../../dtos';
import { PostRepository } from '../../repositories';

export interface IGetAllPostUseCase {
	execute(dto: GetAllPostDto): Promise<PostEntity[]>;
}

export class GetAllPostUseCase implements GetAllPostDto {
	constructor(
		private readonly postRepository: PostRepository,
	) { }

	execute(dto: GetAllPostDto): Promise<PostEntity[]> {
		return this.postRepository.getAll(dto);
	}
}