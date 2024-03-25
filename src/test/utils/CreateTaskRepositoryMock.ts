import { CreateTaskParams } from '../../app/controllers/taskControllers/CreateTask/protocols';
import Task from '../../app/entities/Task';
import { ICreateTaskRepository } from '../../app/repositories/taskRepository/CreateTask/ICreateTaskRepository';

export function createTaskRepositoryMock(taskArray: Task[]) {
  class CreateTaskRepositoryMock implements ICreateTaskRepository {
    constructor(public readonly inMemoryDataBase: Task[]) {}

    async findByTitleAndUserId(
      title: string,
      userId: string,
    ): Promise<Task | null> {
      const taskExists = await this.inMemoryDataBase.find(
        task => task.userId === userId && task.title === title,
      );

      if (taskExists) return taskExists;
      return null;
    }

    async save(params: CreateTaskParams): Promise<void> {
      await this.inMemoryDataBase.push({ ...params, id: crypto.randomUUID() });
    }
  }

  return new CreateTaskRepositoryMock(taskArray);
}
