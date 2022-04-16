import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOptions } from 'sequelize/types';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';

@Injectable()
export class EnterprisesService {

  constructor(
    @InjectModel(Enterprise)
    private enterpriseModel: typeof Enterprise
  ) { }

  create(createEnterpriseDto: CreateEnterpriseDto, options?: CreateOptions) {
    return this.enterpriseModel.create({ ...createEnterpriseDto }, options);
  }

  findAll() {
    return this.enterpriseModel.findAll();
  }

  findOne(id: number): Promise<Enterprise> {
    return this.enterpriseModel.findByPk(id, { include: ['headquarters', 'educations', 'legalForm'] });
  }

  update(id: number, updateEnterpriseDto: UpdateEnterpriseDto) {
    return this.enterpriseModel.update(
      { ...updateEnterpriseDto },
      {
        where: { id: id }
      }
    );
  }

  remove(id: number) {
    return this.enterpriseModel.destroy({
      where: {
        id: id
      }
    });
  }
}
