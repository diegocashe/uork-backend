import { Test, TestingModule } from '@nestjs/testing';
import { ServicesProvidedController } from './services-provided.controller';
import { ServicesProvidedService } from './services-provided.service';

describe('ServicesProvidedController', () => {
  let controller: ServicesProvidedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesProvidedController],
      providers: [ServicesProvidedService],
    }).compile();

    controller = module.get<ServicesProvidedController>(ServicesProvidedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
