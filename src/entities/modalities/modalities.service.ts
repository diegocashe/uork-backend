import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { Modality } from './entities/modality.entity';

@Injectable()
export class ModalitiesService {

  constructor(
    @InjectModel(Modality)
    private modalityModel: typeof Modality
  ) { }

  create(createModalityDto: CreateModalityDto) {
    return this.modalityModel.create({ ...createModalityDto });
  }

  findAll() {
    return this.modalityModel.findAll();
  }

  findOne(id: number) {
    return this.modalityModel.findByPk(id);
  }

  update(id: number, updateModalityDto: UpdateModalityDto) {
    return this.modalityModel.update(
      { ...updateModalityDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.modalityModel.destroy({
      where: {
        id: id
      }
    });
  }
}
