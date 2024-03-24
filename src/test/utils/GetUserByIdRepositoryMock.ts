import User from '../../app/entities/User';
import { IGetUserByIdRepository } from '../../app/repositories/userRepository/GetUserById/IGetUserByIdRepository';

export function getUserByIdRepositoryMock(userArray: User[]) {
  class GetUserByIdRepositoryMock implements IGetUserByIdRepository {
    constructor(public readonly inMemoryDataBase: User[]) {}

    async findById(id: string): Promise<Partial<User> | null> {
      const userExists = await this.inMemoryDataBase.find(
        user => user.id === id,
      );

      if (userExists) return userExists;
      return null;
    }
  }

  return new GetUserByIdRepositoryMock(userArray);
}
