import { Test, TestingModule } from '@nestjs/testing';
import { EducationTypesController } from './education-types.controller';
import { EducationTypesService } from './education-types.service';

describe('EducationTypesController', () => {
  let controller: EducationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationTypesController],
      providers: [EducationTypesService],
    }).compile();

    controller = module.get<EducationTypesController>(EducationTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
