import { Test, TestingModule } from '@nestjs/testing';
import { PeopleSkillsService } from './people-skills.service';

describe('PeopleSkillsService', () => {
  let service: PeopleSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleSkillsService],
    }).compile();

    service = module.get<PeopleSkillsService>(PeopleSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
