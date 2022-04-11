import { Injectable } from '@nestjs/common';
import { CreateJobVacancyDto } from './dto/create-job-vacancy.dto';
import { UpdateJobVacancyDto } from './dto/update-job-vacancy.dto';

@Injectable()
export class JobVacanciesService {
  create(createJobVacancyDto: CreateJobVacancyDto) {
    return 'This action adds a new jobVacancy';
  }

  findAll() {
    return `This action returns all jobVacancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobVacancy`;
  }

  update(id: number, updateJobVacancyDto: UpdateJobVacancyDto) {
    return `This action updates a #${id} jobVacancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobVacancy`;
  }
}
