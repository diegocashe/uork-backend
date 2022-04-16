import { Module } from '@nestjs/common';
import { LanguageLevelsService } from './language-levels.service';
import { LanguageLevelsController } from './language-levels.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageLevel } from './entities/language-level.entity';
import { JobVacanciesService } from '../job-vacancies/job-vacancies.service';

@Module({
  imports: [SequelizeModule.forFeature([LanguageLevel])],
  exports:[SequelizeModule, JobVacanciesService],
  controllers: [LanguageLevelsController],
  providers: [LanguageLevelsService]
})
export class LanguageLevelsModule {}
