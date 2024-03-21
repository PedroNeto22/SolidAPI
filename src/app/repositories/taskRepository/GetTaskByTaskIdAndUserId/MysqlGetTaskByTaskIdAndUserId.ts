import { PrismaClient } from '@prisma/client';
import Task from '../../../entities/Task';
import { IGetTaskByTaskIdAndUserIdRepository } from './IGetTaskByTaskIdAndUserIdRepository';

const prisma = new PrismaClient();

export default class MysqlGetTaskByTaskIdAndUserIdRepository
  implements IGetTaskByTaskIdAndUserIdRepository
{
  async findTaskByTaskIdAndUserId(
    userId: string,
    taskId: string,
  ): Promise<Partial<Task> | null> {
    const task = await prisma.tasks.findFirst({
      where: {
        userId,
        id: taskId,
      },
    });

    if (task) {
      return task;
    }
  }
}
