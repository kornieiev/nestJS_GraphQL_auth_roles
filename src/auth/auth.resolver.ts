import { Context, Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import type { GqlContext } from 'src/common/interfaces/gql-context.interface';
import { AuthModel } from './models/auth.model';
import { RegisterInput } from './inputs/register.input';
import { LoginInput } from './inputs/login.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  async register(
    @Context() context: GqlContext,
    @Args('data') input: RegisterInput,
  ) {
    const { res } = context;
    return this.authService.register(res, input);
  }

  @Mutation(() => AuthModel)
  async login(@Context() context: GqlContext, @Args('data') input: LoginInput) {
    const { res } = context;
    return this.authService.login(res, input);
  }

  @Mutation(() => AuthModel)
  async refresh(@Context() context: GqlContext) {
    const { req, res } = context;
    return this.authService.refresh(req, res);
  }

  @Mutation(() => Boolean)
  async logout(@Context() context: GqlContext) {
    const { res } = context;
    return this.authService.logout(res);
  }
}
