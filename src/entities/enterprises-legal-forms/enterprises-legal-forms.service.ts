import { Injectable } from '@nestjs/common';
import { CreateEnterprisesLegalFormDto } from './dto/create-enterprises-legal-form.dto';
import { UpdateEnterprisesLegalFormDto } from './dto/update-enterprises-legal-form.dto';

@Injectable()
export class EnterprisesLegalFormsService {
  create(createEnterprisesLegalFormDto: CreateEnterprisesLegalFormDto) {
    return 'This action adds a new enterprisesLegalForm';
  }

  findAll() {
    return `This action returns all enterprisesLegalForms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enterprisesLegalForm`;
  }

  update(id: number, updateEnterprisesLegalFormDto: UpdateEnterprisesLegalFormDto) {
    return `This action updates a #${id} enterprisesLegalForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} enterprisesLegalForm`;
  }
}
