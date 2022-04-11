import { Test, TestingModule } from '@nestjs/testing';
import { JobVacancyProfitsController } from './job-vacancy-profits.controller';
import { JobVacancyProfitsService } from './job-vacancy-profits.service';

describe('JobVacancyProfitsController', () => {
  let controller: JobVacancyProfitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobVacancyProfitsController],
      providers: [JobVacancyProfitsService],
    }).compile();

    controller = module.get<JobVacancyProfitsController>(JobVacancyProfitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
