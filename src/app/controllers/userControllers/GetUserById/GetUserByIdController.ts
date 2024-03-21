import { Request, Response } from 'express';
import { IGetUserByIdUseCase } from './protocols';

export default class GetUserByIdController {
  constructor(private readonly getUserByIdUseCase: IGetUserByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { userId: id } = req;
    try {
      const userExists = await this.getUserByIdUseCase.execute(id);

      return res.status(200).json(userExists);
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
