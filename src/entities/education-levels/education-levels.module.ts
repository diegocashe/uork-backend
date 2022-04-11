import { Module } from '@nestjs/common';
import { EducationLevelsService } from './education-levels.service';
import { EducationLevelsController } from './education-levels.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EducationLevel } from './entities/education-level.entity';

@Module({
  imports: [SequelizeModule.forFeature([EducationLevel])],
  exports:[SequelizeModule],
  controllers: [EducationLevelsController],
  providers: [EducationLevelsService]
})
export class EducationLevelsModule {}
