import { Request, Response } from 'express';
import { ILoginUserUseCase } from './protocols';

export default class LoginUserController {
  constructor(private readonly loginUserUseCase: ILoginUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields required',
      });
    }

    try {
      const token = await this.loginUserUseCase.execute({ email, password });
      return res.status(202).json({ token });
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
