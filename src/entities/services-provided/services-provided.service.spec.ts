import { Test, TestingModule } from '@nestjs/testing';
import { ServicesProvidedService } from './services-provided.service';

describe('ServicesProvidedService', () => {
  let service: ServicesProvidedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesProvidedService],
    }).compile();

    service = module.get<ServicesProvidedService>(ServicesProvidedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
