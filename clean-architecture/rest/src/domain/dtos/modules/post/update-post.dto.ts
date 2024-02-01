export class UpdatePostDto {

	private constructor(
		private readonly postId?: number,
		private readonly title?: string,
		private readonly content?: string,
	) { }

	get values(): { postId: number, title?: string, content?: string } {
		return {
			postId: this.postId!,
			...(this.title ? { title: this.title } : {}),
			...(this.content ? { content: this.content } : {}),
		};
	}

	public static create(payload: { [key: string]: any }): [string[] | null, UpdatePostDto] {
		const { postId, title, content } = payload;
		const errors: string[] = [];

		if (!postId || isNaN(Number(postId))) {
			errors.push('postId is required');
		}

		return [errors.length ? errors : null, new UpdatePostDto(postId, title, content)];
	}
}