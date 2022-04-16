import { Test, TestingModule } from '@nestjs/testing';
import { PeopleEducationController } from './people-education.controller';
import { PeopleEducationService } from './people-education.service';

describe('PeopleEducationController', () => {
  let controller: PeopleEducationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleEducationController],
      providers: [PeopleEducationService],
    }).compile();

    controller = module.get<PeopleEducationController>(PeopleEducationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
