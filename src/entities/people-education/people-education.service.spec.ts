import { Test, TestingModule } from '@nestjs/testing';
import { PeopleEducationService } from './people-education.service';

describe('PeopleEducationService', () => {
  let service: PeopleEducationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleEducationService],
    }).compile();

    service = module.get<PeopleEducationService>(PeopleEducationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
