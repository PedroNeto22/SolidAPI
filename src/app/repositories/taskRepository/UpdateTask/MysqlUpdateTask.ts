import { PrismaClient } from '@prisma/client';
import { UpdateTaskParams } from '../../../controllers/taskControllers/UpdateTask/protocols';
import { IUpdateTaskRepository } from './IUpdateTaskRepository';

const prisma = new PrismaClient();

export default class MysqlUpdateTask implements IUpdateTaskRepository {
  async updateTask(updateTaskParams: UpdateTaskParams): Promise<void> {
    await prisma.tasks.update({
      where: {
        userId: updateTaskParams.userId,
        id: updateTaskParams.taskId,
      },
      data: {
        title: updateTaskParams.title,
        body: updateTaskParams.body,
        status: updateTaskParams.status,
        priority: updateTaskParams.priority,
      },
    });
  }
}
