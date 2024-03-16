import { TaskParams } from '../../../controllers/taskControllers/GetTasksByUserId/protocols';

export interface IGetTaskByUserIdRepository {
  findTasksByUserId(id: string): Promise<TaskParams[] | null>;
}
