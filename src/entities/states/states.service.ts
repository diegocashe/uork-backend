import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from "./entities/state.entity";


@Injectable()
export class StatesService {
  
  constructor(
    @InjectModel(State)
    private stateModel: typeof State
  ) { }

  create(createStateDto: CreateStateDto) {
    return this.stateModel.create({ ...createStateDto});
  }

  findAll() {
    return this.stateModel.findAll();
  }

  findOne(id: number) {
    return this.stateModel.findByPk(id);
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return this.stateModel.update(
      { ...updateStateDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.stateModel.destroy({
      where: {
        id: id
      }
    });
  }
}
