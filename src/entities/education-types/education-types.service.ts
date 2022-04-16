import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEducationTypeDto } from './dto/create-education-type.dto';
import { UpdateEducationTypeDto } from './dto/update-education-type.dto';
import { EducationType } from './entities/education-type.entity';

@Injectable()
export class EducationTypesService {
  
  constructor(
    @InjectModel(EducationType)
    private educationtypeModel: typeof EducationType
  ) { }

  create(createEducationTypeDto: CreateEducationTypeDto) {
    return this.educationtypeModel.create({ ...createEducationTypeDto});
  }

  findAll() {
    return this.educationtypeModel.findAll();
  }

  findOne(id: number) {
    return this.educationtypeModel.findByPk(id);
  }

  update(id: number, updateEducationTypeDto: UpdateEducationTypeDto) {
    return this.educationtypeModel.update(
      { ...updateEducationTypeDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.educationtypeModel.destroy({
      where: {
        id: id
      }
    });
  }
}
