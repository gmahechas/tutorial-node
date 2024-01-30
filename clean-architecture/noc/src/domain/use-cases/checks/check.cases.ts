import { LogEntity, LogSeverity } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckCaseImplementation {
	execute(url: string): Promise<void>;
}

type SucessCallback = () => void | undefined;
type FailureCallback = (error: string) => void | undefined;

export class CheckCases implements CheckCaseImplementation {

	constructor(
		private readonly logRepository: LogRepository,
		private readonly sucessCallback?: SucessCallback,
		private readonly failureCallback?: FailureCallback,
	) {}

	async execute(url: string): Promise<void> {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Request failed for ${url} with status ${response.status}`);
			}

			const log = new LogEntity(LogSeverity.LOW, `server ${url} is ok`);
			this.logRepository.saveLog(log);
			this.sucessCallback && this.sucessCallback();
		} catch (error) {
			const log = new LogEntity(LogSeverity.HIGH, `server ${url} is not ok`);
			this.logRepository.saveLog(log);
			this.failureCallback &&this.failureCallback(`${error}`);
		}
	}
}