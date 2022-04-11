import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLevelsController } from './language-levels.controller';
import { LanguageLevelsService } from './language-levels.service';

describe('LanguageLevelsController', () => {
  let controller: LanguageLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLevelsController],
      providers: [LanguageLevelsService],
    }).compile();

    controller = module.get<LanguageLevelsController>(LanguageLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
