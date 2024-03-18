import { Request, Response } from 'express';
import { ICreateTaskUseCase } from './protocols';

export default class CreateTaskController {
  constructor(private readonly createTaskUseCase: ICreateTaskUseCase) {}

  async handle(req: Request, res: Response) {
    const { title, body, status, priority, userId } = req.body;

    if (!title || !body || !status || !priority || !userId) {
      return res.status(400).json({
        message: 'All fields required',
      });
    }
    try {
      await this.createTaskUseCase.execute({
        title,
        body,
        status,
        priority,
        userId,
      });
      return res.status(201).send();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
