import User from '../../../entities/User';

export interface IGetUserByIdRepository {
  findById(userId: string): Promise<Omit<User, 'password'> | null>;
}
