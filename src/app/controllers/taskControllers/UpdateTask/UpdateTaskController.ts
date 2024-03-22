import { Request, Response } from 'express';
import { IUpdateTaskUseCase } from './protocols';

export default class UpdateTaskController {
  constructor(private readonly updateTaskUseCase: IUpdateTaskUseCase) {}

  async handle(req: Request, res: Response) {
    const { userId } = req;
    const { taskId } = req.params;

    try {
      await this.updateTaskUseCase.execute({ ...req.body, userId, taskId });
      return res.status(200).json();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
