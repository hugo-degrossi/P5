import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth-guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import {ProductsService} from "./products/products.service";
@Controller('api')
export class AppController {
  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('products')
  getProducts(@Request() req) {
    return this.productsService.getAll();
  }
}
