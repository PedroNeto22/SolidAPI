import { TaskData } from '../../../controllers/taskControllers/GetTasksByUserId/protocols';

export interface IGetTaskByUserIdRepository {
  findTasksByUserId(userId: string): Promise<TaskData[] | null>;
}
