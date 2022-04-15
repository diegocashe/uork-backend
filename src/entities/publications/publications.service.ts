import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './entities/publication.entity';

@Injectable()
export class PublicationsService {

  constructor(
    @InjectModel(Publication)
    private publicationModel: typeof Publication
  ) { }

  create(createPublicationDto: CreatePublicationDto) {
    return this.publicationModel.create({ ...createPublicationDto });
  }

  findAll() {
    return this.publicationModel.findAll();
  }

  findOne(id: number) {
    return this.publicationModel.findByPk(id);
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return this.publicationModel.update(
      { ...updatePublicationDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.publicationModel.destroy({
      where: {
        id: id
      }
    });
  }
}
