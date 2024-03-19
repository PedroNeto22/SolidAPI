import bcrypt from 'bcryptjs';
import {
  ILoginUserUseCase,
  LoginParams,
} from '../../controllers/loginControllers/LoginUser/protocols';
import { IGetUserByEmailRepository } from '../../repositories/userRepository/GetUserByEmail/IGetUserByEmailRepository';

export default class LoginUserUseCase implements ILoginUserUseCase {
  constructor(
    private readonly getUserByEmailRepository: IGetUserByEmailRepository,
  ) {}

  async execute(loginParams: LoginParams): Promise<void> {
    const user = await this.getUserByEmailRepository.findByEmail(
      loginParams.email,
    );

    if (!user) {
      throw new Error('email or password wrong');
    }

    const passwordRight = bcrypt.compare(
      loginParams.password,
      user.password as string,
    );

    if (!passwordRight) {
      throw new Error('email or password wrong');
    }
  }
}
