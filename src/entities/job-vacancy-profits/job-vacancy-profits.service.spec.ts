import { Test, TestingModule } from '@nestjs/testing';
import { JobVacancyProfitsService } from './job-vacancy-profits.service';

describe('JobVacancyProfitsService', () => {
  let service: JobVacancyProfitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobVacancyProfitsService],
    }).compile();

    service = module.get<JobVacancyProfitsService>(JobVacancyProfitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
