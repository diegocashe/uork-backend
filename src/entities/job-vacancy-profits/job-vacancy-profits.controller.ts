import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobVacancyProfitsService } from './job-vacancy-profits.service';
import { CreateJobVacancyProfitDto } from './dto/create-job-vacancy-profit.dto';
import { UpdateJobVacancyProfitDto } from './dto/update-job-vacancy-profit.dto';

@Controller('job-vacancy-profits')
export class JobVacancyProfitsController {
  constructor(private readonly jobVacancyProfitsService: JobVacancyProfitsService) {}

  @Post()
  create(@Body() createJobVacancyProfitDto: CreateJobVacancyProfitDto) {
    return this.jobVacancyProfitsService.create(createJobVacancyProfitDto);
  }

  @Get()
  findAll() {
    return this.jobVacancyProfitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobVacancyProfitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobVacancyProfitDto: UpdateJobVacancyProfitDto) {
    return this.jobVacancyProfitsService.update(+id, updateJobVacancyProfitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobVacancyProfitsService.remove(+id);
  }
}
