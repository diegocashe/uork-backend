import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';

@Injectable()
export class EducationLevelsService {

  constructor(
    @InjectModel(EducationLevel)
    private educationlevelModel: typeof EducationLevel
  ) { }

  create(createEducationLevelDto: CreateEducationLevelDto) {
    return this.educationlevelModel.create({ ...createEducationLevelDto });
  }

  findAll() {
    return this.educationlevelModel.findAll();
  }

  findOne(id: number) {
    return this.educationlevelModel.findByPk(id);
  }

  update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    return this.educationlevelModel.update(
      { ...updateEducationLevelDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.educationlevelModel.destroy({
      where: {
        id: id
      }
    });
  }
}
