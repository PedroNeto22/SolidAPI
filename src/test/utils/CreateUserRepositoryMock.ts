import { CreateUserParams } from '../../app/controllers/userControllers/CreateUser/protocols';
import User from '../../app/entities/User';
import { ICreateUserRepository } from '../../app/repositories/userRepository/CreateUser/ICreateUserRepository';

export function createUserRepositoryMock(userArray: User[]) {
  class CreateUserRepositoryMock implements ICreateUserRepository {
    constructor(public readonly inMemoryDataBase: User[]) {}

    async save(params: CreateUserParams): Promise<void> {
      await this.inMemoryDataBase.push({ ...params, id: crypto.randomUUID() });
    }

    async findByEmail(email: string): Promise<User | null> {
      const user = await this.inMemoryDataBase.find(
        users => users.email === email,
      );

      if (user) {
        return user;
      }

      return null;
    }
  }

  return new CreateUserRepositoryMock(userArray);
}
