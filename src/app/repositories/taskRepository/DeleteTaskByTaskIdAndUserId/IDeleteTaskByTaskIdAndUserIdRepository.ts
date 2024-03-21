import { DeleteTaskParams } from '../../../controllers/taskControllers/DeleteTaskByTaskIdAndUserId/protocols';

export interface IDeleteTaskByTaskIdAndUserIdRepository {
  deleteTask(deleteTaskParams: DeleteTaskParams): Promise<void>;
}
