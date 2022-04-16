import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEnterprisesLegalFormDto } from './dto/create-enterprises-legal-form.dto';
import { UpdateEnterprisesLegalFormDto } from './dto/update-enterprises-legal-form.dto';
import { EnterprisesLegalForm } from './entities/enterprises-legal-form.entity';

@Injectable()
export class EnterprisesLegalFormsService {

  constructor(
    @InjectModel(EnterprisesLegalForm)
    private enterpriselegalformModel: typeof EnterprisesLegalForm
  ) { }

  create(createEnterprisesLegalFormDto: CreateEnterprisesLegalFormDto) {
    return this.enterpriselegalformModel.create({ ...createEnterprisesLegalFormDto });
  }

  findAll() {
    return this.enterpriselegalformModel.findAll();
  }

  findOne(id: number) {
    return this.enterpriselegalformModel.findByPk(id);
  }

  update(id: number, updateEnterprisesLegalFormDto: UpdateEnterprisesLegalFormDto) {
    return this.enterpriselegalformModel.update(
      { ...updateEnterprisesLegalFormDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.enterpriselegalformModel.destroy({
      where: {
        id: id
      }
    });
  }
}
