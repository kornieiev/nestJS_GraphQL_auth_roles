import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.guard';
import { User, UserRole } from '@prisma/client';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @Query(() => UserModel, {
    description: 'Возврат токена активного пользователя',
  })
  getMe(@Authorized() user: User) {
    return user;
  }

  @Authorization(UserRole.ADMIN) // путь доступен только для тех, кто авторизован и имеет роль ADMIN
  @Query(() => [UserModel], {
    description: 'Возврат полного списка пользователей',
  })
  async getUsers() {
    return await this.userService.findAll();
  }
}
