import { PostEntity } from '../entities/post.entity';
import { CreatePostDto } from '../dtos/post/create-post.dto';
import { UpdatePostDto } from '../dtos/post/update-post.dto';

export abstract class PostDatasource {
	abstract getAll(): Promise<PostEntity[]>;
	abstract getById(payload: number): Promise<PostEntity>;
	abstract create(payload: CreatePostDto): Promise<PostEntity>;
	abstract update(payload: UpdatePostDto): Promise<PostEntity>;
	abstract delete(payload: number): Promise<PostEntity>;
}