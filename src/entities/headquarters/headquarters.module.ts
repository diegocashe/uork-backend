import { Module } from '@nestjs/common';
import { HeadquartersService } from './headquarters.service';
import { HeadquartersController } from './headquarters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Headquarters } from './entities/headquarters.entity';

@Module({
  imports: [SequelizeModule.forFeature([Headquarters])],
  exports:[SequelizeModule, HeadquartersService],
  controllers: [HeadquartersController],
  providers: [HeadquartersService]
})
export class HeadquartersModule {}
