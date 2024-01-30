import { LogEntity, LogSeverity } from '../entities/log.entity';

export abstract class LogRepository {
	abstract saveLog(log: LogEntity): Promise<void>;
	abstract getLogs(severity: LogSeverity): Promise<LogEntity[]>;
}