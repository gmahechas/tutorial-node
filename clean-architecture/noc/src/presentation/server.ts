import { CheckCases } from '../domain/use-cases/checks/check.cases';
import { JobCases } from '../domain/use-cases/jobs/job.cases';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';


const fileSystemLogRepository = new LogRepositoryImpl(
	new FileSystemDatasource(),
);

export class Server {
	public static start() {
		JobCases.createJob('*/3 * * * * *', () => {
			const url = 'http://localhost:3000/';
			new CheckCases(fileSystemLogRepository).execute(url);
		});
	}
}