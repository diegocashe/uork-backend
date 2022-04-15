import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostulationDto } from './dto/create-postulation.dto';
import { UpdatePostulationDto } from './dto/update-postulation.dto';
import { Postulation } from './entities/postulation.entity';

@Injectable()
export class PostulationsService {

  constructor(
    @InjectModel(Postulation)
    private postulatonModel: typeof Postulation
  ) { }

  create(createPostulationDto: CreatePostulationDto) {
    return this.postulatonModel.create({ ...createPostulationDto });
  }

  findAll() {
    return this.postulatonModel.findAll();
  }

  findOne(id: number) {
    return this.postulatonModel.findByPk(id);
  }

  update(id: number, updatePostulationDto: UpdatePostulationDto) {
    return this.postulatonModel.update(
      { ...updatePostulationDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.postulatonModel.destroy({
      where: {
        id: id
      }
    });
  }
}
