export enum LogSeverity {
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH',
}

export class LogEntity {
	public level: LogSeverity;
	public message: string;
	public createAt: Date;

	constructor(
		level: LogSeverity,
		message: string,
	) {
		this.level = level
		this.message = message
		this.createAt = new Date();
	}

	static fromJson = (json: string): LogEntity => {
		const { level, message, createAt } = JSON.parse(json);
		const log = new LogEntity(level, message);
		log.createAt = new Date(createAt);
		return log
	}
}