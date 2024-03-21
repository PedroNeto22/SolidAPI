import {
  DeleteTaskParams,
  IDeleteTaskByTaskIdAndUserIdUseCase,
} from '../../controllers/taskControllers/DeleteTaskByTaskIdAndUserId/protocols';
import { IDeleteTaskByTaskIdAndUserIdRepository } from '../../repositories/taskRepository/DeleteTaskByTaskIdAndUserId/IDeleteTaskByTaskIdAndUserIdRepository';
import { IGetTaskByTaskIdAndUserIdRepository } from '../../repositories/taskRepository/GetTaskByTaskIdAndUserId/IGetTaskByTaskIdAndUserIdRepository';
import { IGetUserByIdRepository } from '../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class DeleteTaskByTaskIdAndUserIdUseCase
  implements IDeleteTaskByTaskIdAndUserIdUseCase
{
  constructor(
    private readonly getUserByIdRepository: IGetUserByIdRepository,
    private readonly deleteTaskByTaskIdAndUserIdRepository: IDeleteTaskByTaskIdAndUserIdRepository,
    private readonly getTaskByTaskIdAndUserIdRepository: IGetTaskByTaskIdAndUserIdRepository,
  ) {}

  async execute(deleteTaskParams: DeleteTaskParams): Promise<void> {
    const userExists = await this.getUserByIdRepository.findById(
      deleteTaskParams.userId,
    );

    if (!userExists) {
      throw new Error('User does not exists');
    }

    const taskExists =
      await this.getTaskByTaskIdAndUserIdRepository.findTaskByTaskIdAndUserId(
        deleteTaskParams.userId,
        deleteTaskParams.taskId,
      );

    if (!taskExists) {
      throw new Error('Task does not exists');
    }

    await this.deleteTaskByTaskIdAndUserIdRepository.deleteTask(
      deleteTaskParams,
    );
  }
}
