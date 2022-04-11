import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationTypesService } from './education-types.service';
import { CreateEducationTypeDto } from './dto/create-education-type.dto';
import { UpdateEducationTypeDto } from './dto/update-education-type.dto';

@Controller('education-types')
export class EducationTypesController {
  constructor(private readonly educationTypesService: EducationTypesService) {}

  @Post()
  create(@Body() createEducationTypeDto: CreateEducationTypeDto) {
    return this.educationTypesService.create(createEducationTypeDto);
  }

  @Get()
  findAll() {
    return this.educationTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationTypeDto: UpdateEducationTypeDto) {
    return this.educationTypesService.update(+id, updateEducationTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationTypesService.remove(+id);
  }
}
