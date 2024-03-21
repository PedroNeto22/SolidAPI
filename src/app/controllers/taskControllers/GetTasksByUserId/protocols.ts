import Task from '../../../entities/Task';

export type TaskData = Partial<Task>;

export interface IGetTasksByUserIdUseCase {
  execute(userId: string): Promise<TaskData[] | null>;
}
