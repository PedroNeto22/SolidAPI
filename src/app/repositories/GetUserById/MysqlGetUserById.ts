import { PrismaClient } from '@prisma/client';
import { IGetUserByIdRepository } from './IGetUserByIdRepository';
import User from '../../entities/User';

const prisma = new PrismaClient();

export default class MysqlGetUserById implements IGetUserByIdRepository {
  async findById(userId: string): Promise<Omit<User, 'password'> | null> {
    const id = Number(userId);
    const user = await prisma.user.findUnique({
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
      where: {
        id,
      },
    });

    return user;
  }
}
