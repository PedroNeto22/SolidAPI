import Task from '../../../entities/Task';

export interface IGetTaskByTaskIdAndUserIdRepository {
  findTaskByTaskIdAndUserId(
    userId: string,
    taskId: string,
  ): Promise<Task | null>;
}
