import { PostEntity } from '../../domain/entities';
import { PostDatasource } from '../../domain/datasources';
import { PostRepository } from '../../domain/repositories';
import { CreatePostDto, DeletePostDto, GetAllPostDto, GetByIdPostDto, UpdatePostDto } from '../../domain/dtos';

export class PostRepositoryImpl implements PostRepository {

	constructor(
		private readonly datasource: PostDatasource,
	) {}

	getAll(payload: GetAllPostDto): Promise<PostEntity[]> {
		return this.datasource.getAll(payload);
	}

	getById(payload: GetByIdPostDto): Promise<PostEntity> {
		return this.datasource.getById(payload);
	}

	create(payload: CreatePostDto): Promise<PostEntity> {
		return this.datasource.create(payload);
	}

	update(payload: UpdatePostDto): Promise<PostEntity> {
		return this.datasource.update(payload);
	}

	delete(payload: DeletePostDto): Promise<PostEntity> {
		return this.datasource.delete(payload);
	}
}