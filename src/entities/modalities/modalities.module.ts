import { Module } from '@nestjs/common';
import { ModalitiesService } from './modalities.service';
import { ModalitiesController } from './modalities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Modality } from './entities/modality.entity';

@Module({
  imports: [SequelizeModule.forFeature([Modality])],
  exports:[SequelizeModule],
  controllers: [ModalitiesController],
  providers: [ModalitiesService]
})
export class ModalitiesModule {}
