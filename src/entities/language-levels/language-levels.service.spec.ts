import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLevelsService } from './language-levels.service';

describe('LanguageLevelsService', () => {
  let service: LanguageLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLevelsService],
    }).compile();

    service = module.get<LanguageLevelsService>(LanguageLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
