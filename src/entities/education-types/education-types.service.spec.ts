import { Test, TestingModule } from '@nestjs/testing';
import { EducationTypesService } from './education-types.service';

describe('EducationTypesService', () => {
  let service: EducationTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationTypesService],
    }).compile();

    service = module.get<EducationTypesService>(EducationTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
