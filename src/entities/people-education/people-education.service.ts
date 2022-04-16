import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePeopleEducationDto } from './dto/create-people-education.dto';
import { UpdatePeopleEducationDto } from './dto/update-people-education.dto';
import { PeopleEducation } from './entities/people-education.entity';

@Injectable()
export class PeopleEducationService {

  constructor(
    @InjectModel(PeopleEducation)
    private peopleeducationModel: typeof PeopleEducation
  ) { }

  create(createPeopleEducationDto: CreatePeopleEducationDto) {
    return this.peopleeducationModel.create({ ...CreatePeopleEducationDto });
  }

  findAll() {
    return this.peopleeducationModel.findAll();
  }

  findOne(id: number) {
    return this.peopleeducationModel.findByPk(id);
  }

  update(id: number, updatePeopleEducationDto: UpdatePeopleEducationDto) {
    return this.peopleeducationModel.update(
      { ...updatePeopleEducationDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.peopleeducationModel.destroy({
      where: {
        id: id
      }
    });
  }
}
