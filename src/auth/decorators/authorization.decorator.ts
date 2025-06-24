// https://youtu.be/HT6cm4GoSIw?t=26126

import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';
import { UserRole } from '@prisma/client';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from './roles.decorator';

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0) {
    return applyDecorators(Roles(...roles), UseGuards(JwtGuard, RolesGuard));
  }
  return applyDecorators(UseGuards(JwtGuard));
}
