import { PrismaClient } from '@prisma/client';
import { IGetTaskByUserIdRepository } from './IGetTasksByUserIdRepository';
import { TaskParams } from '../../../controllers/taskControllers/GetTasksByUserId/protocols';

const prisma = new PrismaClient();

export default class MysqlGetTasksByUserId
  implements IGetTaskByUserIdRepository
{
  async findTasksByUserId(id: string): Promise<TaskParams[] | null> {
    const userId = Number(id);
    const tasks = await prisma.tasks.findMany({
      where: {
        userId,
      },
      orderBy: {
        created_at: 'desc',
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
