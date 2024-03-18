import { Request, Response } from 'express';
import { IGetTasksByUserIdUseCase } from './protocols';

export default class GetTasksByUserIdController {
  constructor(
    private readonly getTaskByUserIdUseCase: IGetTasksByUserIdUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    console.log(userId);

    try {
      const tasks = await this.getTaskByUserIdUseCase.execute(userId);
      return res.status(200).json(tasks);
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
