import { IGetUserByIdUseCase } from '../../../controllers/userControllers/GetUserById/protocols';
import User from '../../../entities/User';
import { IGetUserByIdRepository } from '../../../repositories/userRepository/GetUserById/IGetUserByIdRepository';

export default class GetUserByIdUseCase implements IGetUserByIdUseCase {
  constructor(private readonly getUserByIdRepository: IGetUserByIdRepository) {}

  execute(id: string): Promise<Partial<User> | null> {
    const user = this.getUserByIdRepository.findById(id);

    if (!user) {
      throw new Error('the user does not exist');
    }

    return user;
  }
}
