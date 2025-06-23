// https://youtu.be/HT6cm4GoSIw?t=25394

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field(() => String)
  accessToken: string;
}
