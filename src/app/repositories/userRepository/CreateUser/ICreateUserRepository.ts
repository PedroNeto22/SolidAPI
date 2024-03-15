import { CreateUserParams } from '../../../controllers/userControllers/CreateUser/protocols';
import User from '../../../entities/User';

export interface ICreateUserRepository {
  save(params: CreateUserParams): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
