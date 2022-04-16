import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {

  constructor(
    @InjectModel(Education)
    private educationModel: typeof Education
  ) { }

  create(createEducationDto: CreateEducationDto) {
    return this.educationModel.create({ ...createEducationDto });
  }

  findAll() {
    return this.educationModel.findAll();
  }

  findOne(id: number) {
    return this.educationModel.findByPk(id);
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    return this.educationModel.update(
      { ...updateEducationDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.educationModel.destroy({
      where: {
        id: id
      }
    });
  }

  findByEnterpriseId(enterpriseId: number): Promise<Education[]> {
    return this.educationModel.findAll({
      where: {
        enterpriseId: enterpriseId
      },
      include: ['educationLevel', 'educationType', 'scope', 'people']
    })
  }
}
