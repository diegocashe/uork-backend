import { Test, TestingModule } from '@nestjs/testing';
import { LanguagePeopleController } from './language-people.controller';
import { LanguagePeopleService } from './language-people.service';

describe('LanguagePeopleController', () => {
  let controller: LanguagePeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguagePeopleController],
      providers: [LanguagePeopleService],
    }).compile();

    controller = module.get<LanguagePeopleController>(LanguagePeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
