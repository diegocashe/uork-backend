import { Test, TestingModule } from '@nestjs/testing';
import { EnterprisesLegalFormsController } from './enterprises-legal-forms.controller';
import { EnterprisesLegalFormsService } from './enterprises-legal-forms.service';

describe('EnterprisesLegalFormsController', () => {
  let controller: EnterprisesLegalFormsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterprisesLegalFormsController],
      providers: [EnterprisesLegalFormsService],
    }).compile();

    controller = module.get<EnterprisesLegalFormsController>(EnterprisesLegalFormsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
