import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  // пример написания метода GraphQL
  // https://youtu.be/HT6cm4GoSIw?t=24254
  // private user = [
  //   { id: 1, username: 'alice', email: 'alice@example.com' },
  //   { id: 2, username: 'bob', email: 'bob@example.com' },
  //   { id: 3, username: 'charlie', email: 'charlie@example.com' },
  // ];

  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    // return this.user;
    return await this.prismaService.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
