import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {

  constructor(
    @InjectModel(Skill)
    private skillModel: typeof Skill
  ) { }

  create(createSkillDto: CreateSkillDto) {
    return this.skillModel.create({ ...createSkillDto });
  }

  findAll() {
    return this.skillModel.findAll();
  }

  findOne(id: number) {
    return this.skillModel.findByPk(id);
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.skillModel.update(
      { ...updateSkillDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.skillModel.destroy({
      where: {
        id: id
      }
    });
  }
}
