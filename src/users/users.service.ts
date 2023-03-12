import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LocalPrismaService } from '../local-prisma/local-prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: LocalPrismaService) {}

  /***
   * Finds one user by unique keys
   * @param where - object with unique options
   * @returns user - founded user
   * @throws NotFoundException - if user is not found
   */
  async findOne(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({ where });
    if (!user) throw new NotFoundException('User is not found.');
    return user;
  }
}
