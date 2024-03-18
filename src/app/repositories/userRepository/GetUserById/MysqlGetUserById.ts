import { PrismaClient } from '@prisma/client';
import { IGetUserByIdRepository } from './IGetUserByIdRepository';
import User from '../../../entities/User';

const prisma = new PrismaClient();

export default class MysqlGetUserByIdRepository
  implements IGetUserByIdRepository
{
  async findById(id: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      const {
        password,
        updated_at: updatedAt,
        created_at: createdAt,
        ...userData
      } = user;
      return userData;
    }

    return null;
  }
}
