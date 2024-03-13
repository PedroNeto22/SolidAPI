import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class User {
  async save(email: string, firstName: string, lastName: string) {
    try {
      const user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
        },
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}

export default new User();
