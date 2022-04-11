import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHeadquartersDto } from './dto/create-headquarters.dto';
import { UpdateHeadquartersDto } from './dto/update-headquarters.dto';
import { Headquarters } from './entities/headquarters.entity';

@Injectable()
export class HeadquartersService {

  constructor(
    @InjectModel(Headquarters)
    private headquartersModel: typeof Headquarters,
  ) { }

  create(createHeadquartersDto: CreateHeadquartersDto) {
    return 'This action adds a new headquarters';
  }

  findAll() {
    return `This action returns all headquarters`;
  }

  findOne(id: number) {
    return this.headquartersModel.findByPk(id, { include: ['localization', 'enterprise', 'workers', 'jobVacancies'] });
  }

  findByEnterpriseId(enterpriseId: number): Promise<Headquarters[]> {
    return this.headquartersModel.findAll({
      where: {
        enterpriseId: enterpriseId
      },
      include: ['localization', 'enterprise', 'workers', 'jobVacancies']
    })
  }

  update(id: number, updateHeadquartersDto: UpdateHeadquartersDto) {
    return `This action updates a #${id} headquarters`;
  }

  remove(id: number) {
    return `This action removes a #${id} headquarters`;
  }
}
