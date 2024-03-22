import { UpdateTaskParams } from '../../../controllers/taskControllers/UpdateTask/protocols';

export interface IUpdateTaskRepository {
  updateTask(updateTaskParams: UpdateTaskParams): Promise<void>;
}
