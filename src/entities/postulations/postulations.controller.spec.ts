import { Test, TestingModule } from '@nestjs/testing';
import { PostulationsController } from './postulations.controller';
import { PostulationsService } from './postulations.service';

describe('PostulationsController', () => {
  let controller: PostulationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationsController],
      providers: [PostulationsService],
    }).compile();

    controller = module.get<PostulationsController>(PostulationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
