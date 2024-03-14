import {
  CreateUserParams,
  ICreateUserUseCase,
} from '../../controllers/userControllers/CreateUser/protocols';
import User from '../../entities/User';
import { ICreateUserRepository } from '../../repositories/CreateUser/ICreateUserRepository';

export default class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async execute(params: CreateUserParams): Promise<void> {
    const userAlreadyExists = await this.createUserRepository.findByEmail(
      params.email,
    );

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const user = new User(
      params.email,
      params.firstName,
      params.lastName,
      params.password,
    );

    this.createUserRepository.save(user);
  }
}
