import { Module } from '@nestjs/common';
import { PostulationsService } from './postulations.service';
import { PostulationsController } from './postulations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Postulation } from './entities/postulation.entity';

@Module({
  imports: [SequelizeModule.forFeature([Postulation])],
  exports:[SequelizeModule],
  controllers: [PostulationsController],
  providers: [PostulationsService]
})
export class PostulationsModule {}
