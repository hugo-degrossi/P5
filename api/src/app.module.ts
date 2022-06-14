import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [AuthModule, UsersModule, LocalAuthGuard, ProductsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
