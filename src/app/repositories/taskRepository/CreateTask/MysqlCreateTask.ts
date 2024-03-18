import { PrismaClient } from '@prisma/client';
import { CreateTaskParams } from '../../../controllers/taskControllers/CreateTask/protocols';
import Task from '../../../entities/Task';
import { ICreateTaskRepository } from './ICreateTaskRepository';

const prisma = new PrismaClient();

export default class MysqlCreateTaskRepository
  implements ICreateTaskRepository
{
  async findByTitleAndUserId(
    title: string,
    userId: string,
  ): Promise<Task | null> {
    const task = (await prisma.tasks.findFirst({
      where: {
        title,
        userId,
      },
    })) as Task;

    return task;
  }

  async save(params: CreateTaskParams): Promise<void> {
    await prisma.tasks.create({
      data: {
        title: params.title,
        body: params.body,
        status: params.status,
        priority: params.priority,
        userId: params.userId,
      },
    });
  }
}
