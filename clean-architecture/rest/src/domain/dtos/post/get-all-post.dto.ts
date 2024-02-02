export class GetAllPostDto {

	private constructor() { }

	public static create(): [string[] | null, GetAllPostDto] {
		const errors: string[] = [];
		return [errors.length ? errors : null, new GetAllPostDto()];
	}
}