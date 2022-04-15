import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service } from './entities/service.entity';

@Module({
  imports: [SequelizeModule.forFeature([Service])],
  exports: [SequelizeModule, ServicesService],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule { }
