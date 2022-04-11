import { Module } from '@nestjs/common';
import { JobVacancyProfitsService } from './job-vacancy-profits.service';
import { JobVacancyProfitsController } from './job-vacancy-profits.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JobVacancyProfit } from './entities/job-vacancy-profit.entity';

@Module({
  imports: [SequelizeModule.forFeature([JobVacancyProfit])],
  exports:[SequelizeModule],
  controllers: [JobVacancyProfitsController],
  providers: [JobVacancyProfitsService]
})
export class JobVacancyProfitsModule {}
