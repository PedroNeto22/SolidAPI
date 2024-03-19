import { PrismaClient } from '@prisma/client';
import { IGetUserByEmailRepository } from './IGetUserByEmailRepository';
import User from '../../../entities/User';

const prisma = new PrismaClient();

export default class MysqlGetUserByEmailRepository
  implements IGetUserByEmailRepository
{
  async findByEmail(email: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      const {
        updated_at: updatedAt,
        created_at: createdAt,
        ...userData
      } = user;
      return userData;
    }

    return null;
  }
}
