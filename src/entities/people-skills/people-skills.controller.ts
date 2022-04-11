import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleSkillsService } from './people-skills.service';
import { CreatePeopleSkillDto } from './dto/create-people-skill.dto';
import { UpdatePeopleSkillDto } from './dto/update-people-skill.dto';

@Controller('people-skills')
export class PeopleSkillsController {
  constructor(private readonly peopleSkillsService: PeopleSkillsService) {}

  @Post()
  create(@Body() createPeopleSkillDto: CreatePeopleSkillDto) {
    return this.peopleSkillsService.create(createPeopleSkillDto);
  }

  @Get()
  findAll() {
    return this.peopleSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeopleSkillDto: UpdatePeopleSkillDto) {
    return this.peopleSkillsService.update(+id, updatePeopleSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleSkillsService.remove(+id);
  }
}
