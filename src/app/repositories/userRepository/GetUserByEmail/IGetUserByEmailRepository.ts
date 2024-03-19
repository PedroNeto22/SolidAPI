import User from '../../../entities/User';

export interface IGetUserByEmailRepository {
  findByEmail(email: string): Promise<Partial<User> | null>;
}
