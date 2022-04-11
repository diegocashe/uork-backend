import { PartialType } from '@nestjs/mapped-types';
import { CreateJobVacancyProfitDto } from './create-job-vacancy-profit.dto';

export class UpdateJobVacancyProfitDto extends PartialType(CreateJobVacancyProfitDto) {}
