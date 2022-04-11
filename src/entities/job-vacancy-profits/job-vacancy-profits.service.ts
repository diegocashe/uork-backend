import { Injectable } from '@nestjs/common';
import { CreateJobVacancyProfitDto } from './dto/create-job-vacancy-profit.dto';
import { UpdateJobVacancyProfitDto } from './dto/update-job-vacancy-profit.dto';

@Injectable()
export class JobVacancyProfitsService {
  create(createJobVacancyProfitDto: CreateJobVacancyProfitDto) {
    return 'This action adds a new jobVacancyProfit';
  }

  findAll() {
    return `This action returns all jobVacancyProfits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobVacancyProfit`;
  }

  update(id: number, updateJobVacancyProfitDto: UpdateJobVacancyProfitDto) {
    return `This action updates a #${id} jobVacancyProfit`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobVacancyProfit`;
  }
}
