// https://youtu.be/HT6cm4GoSIw?t=23061 - 1 - проект REST API
// https://youtu.be/HT6cm4GoSIw?t=25945 - 2 - проект GraphQL

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import type { JwtPayload } from '../interfaces/jwt.intenface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // запрещает работать с просроченным токеном
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      algorithms: ['HS256'],
    });
  }
  async validate(payload: JwtPayload) {
    return await this.authService.validate(payload.id);
  }
}
