import { PostEntity } from '../entities/post.entity';
import { CreatePostDto, UpdatePostDto, DeletePostDto, GetByIdPostDto, GetAllPostDto } from '../dtos/post';

export abstract class PostRepository {
	abstract getAll(payload: GetAllPostDto): Promise<PostEntity[]>;
	abstract getById(payload: GetByIdPostDto): Promise<PostEntity>;
	abstract create(payload: CreatePostDto): Promise<PostEntity>;
	abstract update(payload: UpdatePostDto): Promise<PostEntity>;
	abstract delete(payload: DeletePostDto): Promise<PostEntity>;
}