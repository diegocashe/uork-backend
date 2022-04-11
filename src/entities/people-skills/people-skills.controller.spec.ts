import { Test, TestingModule } from '@nestjs/testing';
import { PeopleSkillsController } from './people-skills.controller';
import { PeopleSkillsService } from './people-skills.service';

describe('PeopleSkillsController', () => {
  let controller: PeopleSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleSkillsController],
      providers: [PeopleSkillsService],
    }).compile();

    controller = module.get<PeopleSkillsController>(PeopleSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
