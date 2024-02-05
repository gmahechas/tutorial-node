import { PostEntity } from '../../domain/entities';
import { PostDatasource } from '../../domain/datasources';
import { PostRepository } from '../../domain/repositories';
import { CreatePostDto, DeletePostDto, GetAllPostDto, GetByIdPostDto, UpdatePostDto } from '../../domain/dtos';

export class PostRepositoryImpl implements PostRepository {

	constructor(
		private readonly datasource: PostDatasource,
	) {}

	async getAll(payload: GetAllPostDto): Promise<PostEntity[]> {
		return this.datasource.getAll(payload);
	}

	async getById(payload: GetByIdPostDto): Promise<PostEntity> {
		return this.datasource.getById(payload);
	}

	async create(payload: CreatePostDto): Promise<PostEntity> {
		return this.datasource.create(payload);
	}

	async update(payload: UpdatePostDto): Promise<PostEntity> {
		return this.datasource.update(payload);
	}

	async delete(payload: DeletePostDto): Promise<PostEntity> {
		return this.datasource.delete(payload);
	}
}