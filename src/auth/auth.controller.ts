import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {}

  @Post('signup')
  signup() {}

  @Get('me')
  me() {}
}
