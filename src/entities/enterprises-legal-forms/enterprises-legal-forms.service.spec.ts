import { Test, TestingModule } from '@nestjs/testing';
import { EnterprisesLegalFormsService } from './enterprises-legal-forms.service';

describe('EnterprisesLegalFormsService', () => {
  let service: EnterprisesLegalFormsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterprisesLegalFormsService],
    }).compile();

    service = module.get<EnterprisesLegalFormsService>(EnterprisesLegalFormsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
