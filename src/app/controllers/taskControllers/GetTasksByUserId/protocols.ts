import Task from '../../../entities/Task';

export type TaskData = Omit<Task, 'userId' | 'updated_at'>;

export interface IGetTasksByUserIdUseCase {
  execute(userId: string): Promise<TaskData[] | null>;
}
