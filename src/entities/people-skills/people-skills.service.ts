import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePeopleSkillDto } from './dto/create-people-skill.dto';
import { UpdatePeopleSkillDto } from './dto/update-people-skill.dto';
import { PeopleSkill } from './entities/people-skill.entity';

@Injectable()
export class PeopleSkillsService {

  constructor(
    @InjectModel(PeopleSkill)
    private peopleskillModel: typeof PeopleSkill
  ) { }

  create(createPeopleSkillDto: CreatePeopleSkillDto) {
    return this.peopleskillModel.create({ ...createPeopleSkillDto });
  }

  findAll() {
    return this.peopleskillModel.findAll();
  }

  findOne(id: number) {
    return this.peopleskillModel.findByPk(id);
  }

  update(id: number, updatePeopleSkillDto: UpdatePeopleSkillDto) {
    return this.peopleskillModel.update(
      { ...updatePeopleSkillDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.peopleskillModel.destroy({
      where: {
        id: id
      }
    });
  }
}
