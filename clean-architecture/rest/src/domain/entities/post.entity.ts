export class PostEntity {
	constructor(
		public postId: number,
		public title: string,
		public content: string,
	) { }

	public static fromObject = (object: { [key: string]: any }): PostEntity => {
		const { postId, title, content } = object;

		if (!postId || isNaN(Number(postId))) {
			throw 'postId is required';
		}

		return new PostEntity(postId, title, content);
	}
}