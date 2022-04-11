import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleSkillDto } from './create-people-skill.dto';

export class UpdatePeopleSkillDto extends PartialType(CreatePeopleSkillDto) {}
