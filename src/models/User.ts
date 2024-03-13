import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class User {
  async save(email: string, firstName: string, lastName: string) {
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
      },
    });
    return user;
  }
}

export default new User();
