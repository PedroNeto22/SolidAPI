import Task from '../../../entities/Task';

export type TaskParams = Omit<Task, 'userId' | 'updated_at'>;

export interface IGetTasksByUserIdUseCase {
  execute(id: string): Promise<TaskParams[] | null>;
}
