import {
  IGetTasksByUserIdUseCase,
  TaskData,
} from '../../../controllers/taskControllers/GetTasksByUserId/protocols';
import { IGetTaskByUserIdRepository } from '../../../repositories/taskRepository/GetTasksByUserId/IGetTasksByUserIdRepository';
import { IGetUserByIdRepository } from '../../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class GetTaskByUserIdUseCase
  implements IGetTasksByUserIdUseCase
{
  constructor(
    private readonly getTaskByUserIdRepository: IGetTaskByUserIdRepository,
    private readonly getUserByIdRepository: IGetUserByIdRepository,
  ) {}

  async execute(userId: string): Promise<TaskData[] | null> {
    const userExists = await this.getUserByIdRepository.findById(userId);

    if (!userExists) {
      throw new Error('User does not exists');
    }

    const userTasks =
      await this.getTaskByUserIdRepository.findTasksByUserId(userId);

    return userTasks;
  }
}
