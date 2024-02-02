import { PostEntity } from '../../domain/entities';
import { PostDatasource } from '../../domain/datasources';
import { CreatePostDto, DeletePostDto, GetAllPostDto, GetByIdPostDto, UpdatePostDto } from '../../domain/dtos';

export class PostDatasourceImpl implements PostDatasource {

	async getAll(payload: GetAllPostDto): Promise<PostEntity[]> {
		const posts = [{ postId: 1, title: 'title 1 getall', content: 'content 1' }];
		return posts.map((post) => PostEntity.fromObject(post));
	}

	async getById(payload: GetByIdPostDto): Promise<PostEntity> {
		const post = { postId: payload.postId, title: 'title 1 getbyid', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async create(payload: CreatePostDto): Promise<PostEntity> {
		const post = { postId: 1, title: 'title 1 create', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async update(payload: UpdatePostDto): Promise<PostEntity> {
		const post = payload.values;

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async delete(payload: DeletePostDto): Promise<PostEntity> {
		const post = { postId: payload.postId, title: 'title 1 delete', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}
}