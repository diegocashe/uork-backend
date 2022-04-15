import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
impor


@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports:[SequelizeModule, UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
