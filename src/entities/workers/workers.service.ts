import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity'

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Worker)
    private workerModel: typeof Worker
  ) { }

  create(createWorkerDto: CreateWorkerDto) {
    return this.workerModel.create({ ...createWorkerDto });
  }

  findAll() {
    return this.workerModel.findAll();
  }

  findOne(id: number) {
    return this.workerModel.findByPk(id);
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerModel.update(
      { ...updateWorkerDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.workerModel.destroy({
      where: {
        id: id
      }
    });
  }
}
