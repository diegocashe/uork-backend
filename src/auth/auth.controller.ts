import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from './public.metadata';
import { employ, enterprise } from './types/singinTypes';
import { ValidatedUser } from './types/validatedUser';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Public()
  @Post('/singin')
  async singin(@Request() req) {
    console.log(req.headers)
    const accessToken = await this.authService.singin(req.body)
    return accessToken;
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: { user: ValidatedUser }) {
    const { username, id } = req.user
    return this.authService.login(username, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

