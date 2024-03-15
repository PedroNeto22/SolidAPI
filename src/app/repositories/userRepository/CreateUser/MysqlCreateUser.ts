import { PrismaClient } from '@prisma/client';
import { ICreateUserRepository } from './ICreateUserRepository';
import User from '../../../entities/User';
import { CreateUserParams } from '../../../controllers/userControllers/CreateUser/protocols';

const prisma = new PrismaClient();

export default class MysqlCreateUserRepository
  implements ICreateUserRepository
{
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async save(params: CreateUserParams): Promise<void> {
    await prisma.user.create({
      data: {
        email: params.email,
        firstName: params.firstName,
        lastName: params.lastName,
        password: params.password,
      },
    });
  }
}
