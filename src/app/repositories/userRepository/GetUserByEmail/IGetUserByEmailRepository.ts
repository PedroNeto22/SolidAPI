import User from '../../../entities/User';

export interface IGetUserByEmailRepository {
  findById(email: string): Promise<Partial<User> | null>;
}
