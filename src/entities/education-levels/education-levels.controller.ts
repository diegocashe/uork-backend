import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationLevelsService } from './education-levels.service';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';

@Controller('education-levels')
export class EducationLevelsController {
  constructor(private readonly educationLevelsService: EducationLevelsService) {}

  @Post()
  create(@Body() createEducationLevelDto: CreateEducationLevelDto) {
    return this.educationLevelsService.create(createEducationLevelDto);
  }

  @Get()
  findAll() {
    return this.educationLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationLevelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationLevelDto: UpdateEducationLevelDto) {
    return this.educationLevelsService.update(+id, updateEducationLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationLevelsService.remove(+id);
  }
}
