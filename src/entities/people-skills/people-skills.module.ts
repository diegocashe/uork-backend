import { Module } from '@nestjs/common';
import { PeopleSkillsService } from './people-skills.service';
import { PeopleSkillsController } from './people-skills.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PeopleSkill } from './entities/people-skill.entity';

@Module({
  imports: [SequelizeModule.forFeature([PeopleSkill])],
  exports:[SequelizeModule],
  controllers: [PeopleSkillsController],
  providers: [PeopleSkillsService]
})
export class PeopleSkillsModule {}
