import { CreatePostDto, PostDatasource, PostEntity, UpdatePostDto } from '../../domain';

export class PostDatasourceImpl implements PostDatasource {

	async getAll(): Promise<PostEntity[]> {
		const posts = [{ postId: 1, title: 'title 1 getall', content: 'content 1' }];
		return posts.map((post) => PostEntity.fromObject(post));
	}

	async getById(payload: number): Promise<PostEntity> {
		const post = { postId: payload, title: 'title 1 getbyid', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async create(payload: CreatePostDto): Promise<PostEntity> {
		const post = { postId: 1, title: 'title 1 getbyid', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async update(payload: UpdatePostDto): Promise<PostEntity> {
		const post = { postId: payload, title: 'title 1 getbyid', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}

	async delete(payload: number): Promise<PostEntity> {
		const post = { postId: payload, title: 'title 1 getbyid', content: 'content 1' };

		if (!post) throw 'post not found';

		return PostEntity.fromObject(post);
	}
}