import { Module } from '@nestjs/common';
import { ServicesProvidedService } from './services-provided.service';
import { ServicesProvidedController } from './services-provided.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServicesProvided } from './entities/services-provided.entity';

@Module({
  imports: [SequelizeModule.forFeature([ServicesProvided])],
  exports: [SequelizeModule, ServicesProvidedService],
  controllers: [ServicesProvidedController],
  providers: [ServicesProvidedService]
})
export class ServicesProvidedModule { }
