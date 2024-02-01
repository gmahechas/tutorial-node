export class CreatePostDto {

	private constructor(
		public readonly title: string,
		public readonly content: string,
	) { }

	public static create(payload: { [key: string]: any }): [string[] | null, CreatePostDto] {
		const { title, content } = payload;
		const errors: string[] = [];

		if (!title) errors.push('title is required');
		if (!content) errors.push('content is required');

		return [errors.length ? errors : null, new CreatePostDto(content, title)];
	}
}