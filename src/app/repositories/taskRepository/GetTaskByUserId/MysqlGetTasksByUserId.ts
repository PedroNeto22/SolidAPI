import { PrismaClient } from '@prisma/client';
import { IGetTaskByUserIdRepository } from './IGetTasksByUserIdRepository';
import { TaskData } from '../../../controllers/taskControllers/GetTasksByUserId/protocols';

const prisma = new PrismaClient();

export default class MysqlGetTasksByUserId
  implements IGetTaskByUserIdRepository
{
  async findTasksByUserId(userId: string): Promise<TaskData[] | null> {
    const tasks = await prisma.tasks.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        body: true,
        status: true,
        priority: true,
        created_at: true,
      },
    });

    return tasks;
  }
}
