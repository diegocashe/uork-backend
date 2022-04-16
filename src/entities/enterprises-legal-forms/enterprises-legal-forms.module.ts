import { Module } from '@nestjs/common';
import { EnterprisesLegalFormsService } from './enterprises-legal-forms.service';
import { EnterprisesLegalFormsController } from './enterprises-legal-forms.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EnterprisesLegalForm } from './entities/enterprises-legal-form.entity';

@Module({
  imports: [SequelizeModule.forFeature([EnterprisesLegalForm])],
  exports: [SequelizeModule, EnterprisesLegalFormsService],
  controllers: [EnterprisesLegalFormsController],
  providers: [EnterprisesLegalFormsService]
})
export class EnterprisesLegalFormsModule { }
