import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {

  constructor(
    @InjectModel(Service)
    private serviceModel: typeof Service
  ) { }

  create(createServiceDto: CreateServiceDto) {
    return this.serviceModel.create({ ...createServiceDto });
  }

  findAll() {
    return this.serviceModel.findAll();
  }

  findOne(id: number) {
    return this.serviceModel.findByPk(id);
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.serviceModel.update(
      { ...updateServiceDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.serviceModel.destroy({
      where: {
        id: id
      }
    });
  }
}
