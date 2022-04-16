import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateJobVacancyProfitDto } from './dto/create-job-vacancy-profit.dto';
import { UpdateJobVacancyProfitDto } from './dto/update-job-vacancy-profit.dto';
import { JobVacancyProfit } from './entities/job-vacancy-profit.entity';

@Injectable()
export class JobVacancyProfitsService {

  constructor(
    @InjectModel(JobVacancyProfit)
    private jobvacancyprofitModel: typeof JobVacancyProfit
  ) { }

  create(createJobVacancyProfitDto: CreateJobVacancyProfitDto) {
    return this.jobvacancyprofitModel.create({ ...createJobVacancyProfitDto });
  }

  findAll() {
    return this.jobvacancyprofitModel.findAll();
  }

  findOne(id: number) {
    return this.jobvacancyprofitModel.findByPk(id);
  }

  update(id: number, updateJobVacancyProfitDto: UpdateJobVacancyProfitDto) {
    return this.jobvacancyprofitModel.update(
      { ...updateJobVacancyProfitDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.jobvacancyprofitModel.destroy({
      where: {
        id: id
      }
    });
  }
}
