import { PrismaClient } from '@prisma/client';
import {
  IGetTaskByTaskIdAndUserIdRepository,
  TaskParams,
} from './IGetTaskByTaskIdAndUserIdRepository';

const prisma = new PrismaClient();

export default class MysqlGetTaskByTaskIdAndUserIdRepository
  implements IGetTaskByTaskIdAndUserIdRepository
{
  async findTaskByTaskIdAndUserId(
    userId: string,
    taskId: string,
  ): Promise<TaskParams | null> {
    const task = await prisma.tasks.findFirst({
      where: {
        userId,
        id: taskId,
      },
    });

    if (task) {
      return task;
    }
    return null;
  }
}
