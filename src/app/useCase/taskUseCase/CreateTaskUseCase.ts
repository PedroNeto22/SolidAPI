import {
  CreateTaskParams,
  ICreateTaskUseCase,
} from '../../controllers/taskControllers/CreateTask/protocols';
import Task from '../../entities/Task';
import { ICreateTaskRepository } from '../../repositories/taskRepository/CreateTask/ICreateTaskRepository';
import { IGetUserByIdRepository } from '../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(
    private readonly createTaskRepository: ICreateTaskRepository,
    private readonly getUserByIdRepository: IGetUserByIdRepository,
  ) {}

  async execute(params: CreateTaskParams): Promise<void> {
    const taskAlreadyExists = await this.createTaskRepository.findByTitle(
      params.title,
      params.userId,
    );

    const userExists = await this.getUserByIdRepository.findById(
      `${params.userId}`,
    );

    if (!userExists) {
      throw new Error('User does not exists');
    }

    if (taskAlreadyExists) {
      throw new Error('Task already exists');
    }

    const task = new Task(
      params.title,
      params.body,
      params.status,
      params.priority,
      params.userId,
    );

    this.createTaskRepository.save(task);
  }
}
