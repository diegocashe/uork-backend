import { Test, TestingModule } from '@nestjs/testing';
import { PuppeterService } from './puppeter.service';

describe('PuppeterService', () => {
  let service: PuppeterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuppeterService],
    }).compile();

    service = module.get<PuppeterService>(PuppeterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
