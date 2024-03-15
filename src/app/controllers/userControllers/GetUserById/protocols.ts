import User from '../../../entities/User';

export interface IGetUserByIdUseCase {
  execute(userId: string): Promise<Omit<User, 'password'> | null>;
}
