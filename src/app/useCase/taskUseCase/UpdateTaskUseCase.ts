import {
  IUpdateTaskUseCase,
  UpdateTaskParams,
} from '../../controllers/taskControllers/UpdateTask/protocols';
import { IGetTaskByTaskIdAndUserIdRepository } from '../../repositories/taskRepository/GetTaskByTaskIdAndUserId/IGetTaskByTaskIdAndUserIdRepository';
import { IUpdateTaskRepository } from '../../repositories/taskRepository/UpdateTask/IUpdateTaskRepository';
import { IGetUserByIdRepository } from '../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class UpdateTaskUseCase implements IUpdateTaskUseCase {
  constructor(
    private readonly getUserByIdRepository: IGetUserByIdRepository,
    private readonly getTaskByTaskIdAndUserIdRepository: IGetTaskByTaskIdAndUserIdRepository,
    private readonly updateTaskRepository: IUpdateTaskRepository,
  ) {}

  async execute(updateTaskParams: UpdateTaskParams): Promise<void> {
    const userExists = await this.getUserByIdRepository.findById(
      updateTaskParams.userId,
    );

    if (!userExists) {
      throw new Error('User does not exists');
    }

    const taskExists =
      await this.getTaskByTaskIdAndUserIdRepository.findTaskByTaskIdAndUserId(
        updateTaskParams.userId,
        updateTaskParams.taskId,
      );

    if (!taskExists) {
      throw new Error('Task does not exists');
    }
    await this.updateTaskRepository.updateTask(updateTaskParams);
  }
}
