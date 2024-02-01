
export class CreatePostDto {

	private constructor(
		public readonly title: string,
	) { }

	public static create(payload: { [key: string]: any }): CreatePostDto {
		const { title } = payload;

		if (!title) {
			throw new Error('Title is required');
		}

		return new CreatePostDto(title);
	}
}