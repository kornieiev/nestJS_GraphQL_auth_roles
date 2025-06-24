import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType({
  description: 'Модель пользователя',
}) // этот декоратор указывает что это именно объект graphql
export class UserModel implements User {
  @Field(() => ID)
  id: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: 'Lola',
    description: 'Имя пользователя',
  })
  name: string;

  @Field(() => String, {
    nullable: false,
    defaultValue: 'lola@mail.com',
    description: 'Почта пользователя',
  })
  email: string;

  @Field(() => String, {
    nullable: false,
    description: 'Пароль пользователя',
  })
  password: string;

  @Field(() => UserRole, {
    nullable: false,
    description: 'Роль пользователя',
  })
  role: UserRole;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
