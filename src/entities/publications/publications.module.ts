import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from './entities/publication.entity';

@Module({
  imports: [SequelizeModule.forFeature([Publication])],
  exports:[SequelizeModule],
  controllers: [PublicationsController],
  providers: [PublicationsService]
})
export class PublicationsModule {}
