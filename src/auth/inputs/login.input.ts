import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsString({ message: 'Почта должно быть строкой' })
  @IsNotEmpty({ message: 'Почта не может быть пустым полем' })
  @IsEmail({}, { message: 'Некоректный формат почты' })
  email: string;

  @Field(() => String)
  @IsString({ message: 'Пароль должно быть строкой' })
  @IsNotEmpty({ message: 'Пароль не может быть пустым полем' })
  @MaxLength(8, { message: 'Пароль должен быть не более 8 символов' })
  @MinLength(3, { message: 'Пароль должен быть не менее 3 символов' })
  password: string;
}
