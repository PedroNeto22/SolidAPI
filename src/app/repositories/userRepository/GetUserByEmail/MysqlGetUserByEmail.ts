import { PrismaClient } from '@prisma/client';
import { IGetUserByEmailRepository } from './IGetUserByEmailRepository';
import User from '../../../entities/User';

const prisma = new PrismaClient();

export default class MysqlGetUserByIdRepository
  implements IGetUserByEmailRepository
{
  async findById(email: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
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
