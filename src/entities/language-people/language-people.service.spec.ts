import { Test, TestingModule } from '@nestjs/testing';
import { LanguagePeopleService } from './language-people.service';

describe('LanguagePeopleService', () => {
  let service: LanguagePeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguagePeopleService],
    }).compile();

    service = module.get<LanguagePeopleService>(LanguagePeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
