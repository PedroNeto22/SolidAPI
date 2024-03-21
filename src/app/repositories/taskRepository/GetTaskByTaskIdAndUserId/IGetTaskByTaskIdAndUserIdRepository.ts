import Task from '../../../entities/Task';

export type TaskParams = Promise<Omit<
  Task,
  'created_at' | 'updated_at' | 'userId'
> | null>;

export interface IGetTaskByTaskIdAndUserIdRepository {
  findTaskByTaskIdAndUserId(
    userId: string,
    taskId: string,
  ): Promise<TaskParams | null>;
}
