import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleEducationService } from './people-education.service';
import { CreatePeopleEducationDto } from './dto/create-people-education.dto';
import { UpdatePeopleEducationDto } from './dto/update-people-education.dto';

@Controller('people-education')
export class PeopleEducationController {
  constructor(private readonly peopleEducationService: PeopleEducationService) {}

  @Post()
  create(@Body() createPeopleEducationDto: CreatePeopleEducationDto) {
    return this.peopleEducationService.create(createPeopleEducationDto);
  }

  @Get()
  findAll() {
    return this.peopleEducationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleEducationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeopleEducationDto: UpdatePeopleEducationDto) {
    return this.peopleEducationService.update(+id, updatePeopleEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleEducationService.remove(+id);
  }
}
