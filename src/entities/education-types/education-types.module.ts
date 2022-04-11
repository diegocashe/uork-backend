import { Module } from '@nestjs/common';
import { EducationTypesService } from './education-types.service';
import { EducationTypesController } from './education-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EducationType } from './entities/education-type.entity';

@Module({
  imports: [SequelizeModule.forFeature([EducationType])],
  exports:[SequelizeModule],
  controllers: [EducationTypesController],
  providers: [EducationTypesService]
})
export class EducationTypesModule {}
