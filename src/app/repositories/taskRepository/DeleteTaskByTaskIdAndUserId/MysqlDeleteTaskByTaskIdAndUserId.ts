import { PrismaClient } from '@prisma/client';
import { DeleteTaskParams } from '../../../controllers/taskControllers/DeleteTaskByUserId/protocols';
import { IDeleteTaskByTaskIdAndUserIdRepository } from './IDeleteTaskByTaskIdAndUserIdRepository';

const prisma = new PrismaClient();

export default class MysqlDeleteTaskByTaskIdAndUserIdRepository
  implements IDeleteTaskByTaskIdAndUserIdRepository
{
  async deleteTask(deleteTaskParams: DeleteTaskParams): Promise<void> {
    await prisma.tasks.delete({
      where: {
        id: deleteTaskParams.taskId,
        userId: deleteTaskParams.userId,
      },
    });
  }
}
