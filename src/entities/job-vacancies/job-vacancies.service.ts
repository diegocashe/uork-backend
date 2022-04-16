import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateJobVacancyDto } from './dto/create-job-vacancy.dto';
import { UpdateJobVacancyDto } from './dto/update-job-vacancy.dto';
import { JobVacancy } from './entities/job-vacancy.entity';

@Injectable()
export class JobVacanciesService {

  constructor(
    @InjectModel(JobVacancy)
    private jobvacancyModel: typeof JobVacancy
  ) { }

  create(createJobVacancyDto: CreateJobVacancyDto) {
    return this.jobvacancyModel.create({ ...createJobVacancyDto });
  }

  findAll() {
    return this.jobvacancyModel.findAll();
  }

  findOne(id: number) {
    return this.jobvacancyModel.findByPk(id);
  }

  update(id: number, updateJobVacancyDto: UpdateJobVacancyDto) {
    return this.jobvacancyModel.update(
      { ...updateJobVacancyDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.jobvacancyModel.destroy({
      where: {
        id: id
      }
    });
  }
}
