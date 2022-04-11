import { Module } from '@nestjs/common';
import { JobVacanciesService } from './job-vacancies.service';
import { JobVacanciesController } from './job-vacancies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JobVacancy } from './entities/job-vacancy.entity';

@Module({
  imports: [SequelizeModule.forFeature([JobVacancy])],
  exports:[SequelizeModule],
  controllers: [JobVacanciesController],
  providers: [JobVacanciesService]
})
export class JobVacanciesModule {}
