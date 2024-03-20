import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  ILoginUserUseCase,
  LoginParams,
  Token,
} from '../../controllers/loginControllers/LoginUser/protocols';
import { IGetUserByEmailRepository } from '../../repositories/userRepository/GetUserByEmail/IGetUserByEmailRepository';

export default class LoginUserUseCase implements ILoginUserUseCase {
  constructor(
    private readonly getUserByEmailRepository: IGetUserByEmailRepository,
  ) {}

  async execute(loginParams: LoginParams): Promise<Token | null> {
    const user = await this.getUserByEmailRepository.findByEmail(
      loginParams.email,
    );

    if (!user) {
      throw new Error('email or password wrong');
    }

    const passwordRight = await bcrypt.compare(
      loginParams.password,
      user.password as string,
    );

    if (!passwordRight) {
      throw new Error('email or password wrong');
    }

    const secret = process.env.SECRETE as string;

    const token = jwt.sign({ id: user.id }, secret);
    return token;
  }
}
