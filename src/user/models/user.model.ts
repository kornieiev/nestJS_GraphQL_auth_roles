import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType() // этот декоратор указываетчто это именно объект graphql
export class UserModel {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;
}
