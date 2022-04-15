import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {

  constructor(
    @InjectModel(Position)
    private positionModel: typeof Position
  ) { }

  create(createPositionDto: CreatePositionDto) {
    return this.positionModel.create({ ...createPositionDto });
  }

  findAll() {
    return this.positionModel.findAll();
  }

  findOne(id: number) {
    return this.positionModel.findByPk(id);
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return this.positionModel.update(
      { ...updatePositionDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.positionModel.destroy({
      where: {
        id: id
      }
    });
  }
}
