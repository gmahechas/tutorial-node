export class DeletePostDto {

	private constructor(
		public readonly postId: number,
	) { }

	public static create(payload: { [key: string]: any }): [string[] | null, DeletePostDto] {
		const { postId } = payload;
		const errors: string[] = [];

		if (!postId || isNaN(Number(postId))) {
			errors.push('postId is required');
		}

		return [errors.length ? errors : null, new DeletePostDto(postId)];
	}
}