import { IGetUserByIdUseCase } from '../../controllers/userControllers/GetUserById/protocols';
import User from '../../entities/User';
import { IGetUserByIdRepository } from '../../repositories/GetUserById/IGetUserByIdRepository';

export default class GetUserByIdUseCase implements IGetUserByIdUseCase {
  constructor(private readonly getUserByIdRepository: IGetUserByIdRepository) {}

  execute(userId: string): Promise<User | null> {
    const user = this.getUserByIdRepository.findById(userId);

    if (!user) {
      throw new Error('the user does not exist');
    }

    return user;
  }
}
