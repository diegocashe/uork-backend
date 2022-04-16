import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { Interest } from './entities/interest.entity';

@Injectable()
export class InterestsService {

  constructor(
    @InjectModel(Interest)
    private interestModel: typeof Interest
  ) { }

  create(createInterestDto: CreateInterestDto) {
    return this.interestModel.create({ ...createInterestDto });
  }

  findAll() {
    return this.interestModel.findAll();
  }

  findOne(id: number) {
    return this.interestModel.findByPk(id);
  }

  update(id: number, updateInterestDto: UpdateInterestDto) {
    return this.interestModel.update(
      { ...updateInterestDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.interestModel.destroy({
      where: {
        id: id
      }
    });
  }
}
