import { CreateTaskParams } from '../../../controllers/taskControllers/CreateTask/protocols';
import Task from '../../../entities/Task';

export interface ICreateTaskRepository {
  findByTitleAndUserId(
    title: string,
    userId: number | null,
  ): Promise<Task | null>;
  save(params: CreateTaskParams): Promise<void>;
}
