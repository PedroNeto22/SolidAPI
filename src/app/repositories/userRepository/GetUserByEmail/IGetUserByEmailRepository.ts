import User from '../../../entities/User';

interface UserData extends User {
  id: string;
}

export interface IGetUserByEmailRepository {
  findByEmail(email: string): Promise<Partial<UserData> | null>;
}
