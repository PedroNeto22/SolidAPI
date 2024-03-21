import { DeleteTaskParams } from '../../../controllers/taskControllers/DeleteTaskByUserId/protocols';

export interface IDeleteTaskByTaskIdAndUserIdRepository {
  deleteTask(deleteTaskParams: DeleteTaskParams): Promise<void>;
}
