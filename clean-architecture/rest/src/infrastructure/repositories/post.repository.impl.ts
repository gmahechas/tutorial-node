import { CreatePostDto, PostDatasource, PostEntity, PostRepository, UpdatePostDto } from '../../domain';

export class PostRepositoryImpl implements PostRepository {

	constructor(
		private readonly datasource: PostDatasource,
	) {}

	getAll(): Promise<PostEntity[]> {
		return this.datasource.getAll()
	}

	getById(payload: number): Promise<PostEntity> {
		return this.datasource.getById(payload);
	}

	create(payload: CreatePostDto): Promise<PostEntity> {
		return this.datasource.create(payload);
	}

	update(payload: UpdatePostDto): Promise<PostEntity> {
		return this.datasource.update(payload);
	}

	delete(payload: number): Promise<PostEntity> {
		return this.datasource.delete(payload);
	}
}