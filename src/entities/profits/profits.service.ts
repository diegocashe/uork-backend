import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfitDto } from './dto/create-profit.dto';
import { UpdateProfitDto } from './dto/update-profit.dto';
import { Profit } from './entities/profit.entity';

@Injectable()
export class ProfitsService {
  constructor(
    @InjectModel(Profit)
    private profitModel: typeof Profit
  ) { }

  create(createProfitDto: CreateProfitDto) {
    return this.profitModel.create({ ...createProfitDto });
  }

  findAll() {
    return this.profitModel.findAll();
  }

  findOne(id: number) {
    return this.profitModel.findByPk(id);
  }

  update(id: number, updateProfitDto: UpdateProfitDto) {
    return this.profitModel.update(
      { ...updateProfitDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.profitModel.destroy({
      where: {
        id: id
      }
    });
  }
}
