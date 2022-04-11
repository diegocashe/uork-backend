import { Test, TestingModule } from '@nestjs/testing';
import { PuppeterController } from './puppeter.controller';
import { PuppeterService } from './puppeter.service';

describe('PuppeterController', () => {
  let controller: PuppeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuppeterController],
      providers: [PuppeterService],
    }).compile();

    controller = module.get<PuppeterController>(PuppeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
