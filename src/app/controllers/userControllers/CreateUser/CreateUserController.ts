import { Request, Response } from 'express';
import { ICreateUserUseCase } from './protocols';

export default class CreateUserController {
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, firstName, lastName, password } = req.body;

    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json({
        message: 'All fields required',
      });
    }

    try {
      await this.createUserUseCase.execute({
        email,
        firstName,
        lastName,
        password,
      });
      return res.status(200).send();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
