import { Request, Response } from 'express';
import { IDeleteTaskByUserIdUseCase } from './protocols';

export default class DeleteTaskByUserIdController {
  constructor(
    private readonly deleteTaskByUserIdUseCase: IDeleteTaskByUserIdUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { userId } = req;
    const { taskId } = req.params;

    if (!taskId) {
      return res.status(400).json({
        message: 'Task ID is required',
      });
    }
    try {
      await this.deleteTaskByUserIdUseCase.execute({ userId, taskId });
      return res.status(200).json();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
