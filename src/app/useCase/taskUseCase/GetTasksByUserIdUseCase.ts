import {
  IGetTasksByUserIdUseCase,
  TaskParams,
} from '../../controllers/taskControllers/GetTasksByUserId/protocols';
import { IGetTaskByUserIdRepository } from '../../repositories/taskRepository/GetUserByUserId/IGetTasksByUserIdRepository';
import { IGetUserByIdRepository } from '../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class GetTaskByUserIdUseCase
  implements IGetTasksByUserIdUseCase
{
  constructor(
    private readonly getTaskByUserIdRepository: IGetTaskByUserIdRepository,
    private readonly getUserByIdRepository: IGetUserByIdRepository,
  ) {}

  async execute(id: string): Promise<TaskParams[] | null> {
    const userExists = await this.getUserByIdRepository.findById(id);

    if (!userExists) {
      throw new Error('User does not exists');
    }

    const userTasks =
      await this.getTaskByUserIdRepository.findTasksByUserId(id);

    return userTasks;
  }
}
