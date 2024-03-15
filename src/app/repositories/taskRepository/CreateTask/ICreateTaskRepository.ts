import { CreateTaskParams } from '../../../controllers/taskControllers/CreateTask/protocols';
import Task from '../../../entities/Task';

export interface ICreateTaskRepository {
  findByTitle(title: string, userId: number | null): Promise<Task | null>;
  save(params: CreateTaskParams): Promise<void>;
}
