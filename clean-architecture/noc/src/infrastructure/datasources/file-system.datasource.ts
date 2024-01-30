import fs from 'fs';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity';

export class FileSystemDatasource implements LogDatasource {

	private readonly logPath = 'logs';
	private readonly lowLogsPath = 'logs/logs-low.log';
	private readonly mediumLogsPath = 'logs/logs-medium.log';
	private readonly highLogsPath = 'logs/logs-high.log';

	constructor() {
		this.createLogsFiles();
	}

	async saveLog(log: LogEntity): Promise<void> {

		const logAsJson = JSON.stringify(log);

		fs.appendFileSync(this.lowLogsPath, `${logAsJson}\n`);
		if (log.level === LogSeverity.LOW) {
			return;
		}

		if (log.level === LogSeverity.MEDIUM) {
			fs.appendFileSync(this.mediumLogsPath, `${logAsJson}\n`);
			return;
		}

		if (log.level === LogSeverity.HIGH) {
			fs.appendFileSync(this.highLogsPath, `${logAsJson}\n`);
			return;
		}
	}

	async getLogs(severity: LogSeverity): Promise<LogEntity[]> {
		switch (severity) {
			case LogSeverity.LOW:
				return this.getLogsFromFiles(this.lowLogsPath);
			case LogSeverity.MEDIUM:
				return this.getLogsFromFiles(this.mediumLogsPath);
			case LogSeverity.HIGH:
				return this.getLogsFromFiles(this.highLogsPath);
			default:
				throw new Error('Invalid severity');
		}
	}

	private getLogsFromFiles = (path: string) => {
		const content = fs.readFileSync(path, 'utf-8');
		const logs = content.split('\n').map(LogEntity.fromJson);
		return logs;
	}

	private createLogsFiles = () => {
		if (!fs.existsSync(this.logPath)) {
			fs.mkdirSync(this.logPath);
		}

		[this.lowLogsPath, this.mediumLogsPath, this.highLogsPath].forEach((path) => {
			if (!fs.existsSync(path)) {
				fs.writeFileSync(path, '');
			}
		});
	}
}