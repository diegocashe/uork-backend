import { Injectable } from '@nestjs/common';
import { CreatePeopleSkillDto } from './dto/create-people-skill.dto';
import { UpdatePeopleSkillDto } from './dto/update-people-skill.dto';

@Injectable()
export class PeopleSkillsService {
  create(createPeopleSkillDto: CreatePeopleSkillDto) {
    return 'This action adds a new peopleSkill';
  }

  findAll() {
    return `This action returns all peopleSkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peopleSkill`;
  }

  update(id: number, updatePeopleSkillDto: UpdatePeopleSkillDto) {
    return `This action updates a #${id} peopleSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} peopleSkill`;
  }
}
