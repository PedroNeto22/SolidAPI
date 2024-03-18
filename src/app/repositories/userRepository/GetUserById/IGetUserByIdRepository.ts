import User from '../../../entities/User';

export interface IGetUserByIdRepository {
  findById(id: string): Promise<Partial<User> | null>;
}
