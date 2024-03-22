import { Request, Response } from 'express';
import { IUpdateTaskUseCase } from './protocols';

export default class UpdateTaskController {
  constructor(private readonly updateTaskUseCase: IUpdateTaskUseCase) {}

  handle(req: Request, res: Response) {
    const { title, body, status, priority } = req.body;
    const { userId } = req;


    try{
      await this.updateTaskUseCase.execute()
    }
  }
}
