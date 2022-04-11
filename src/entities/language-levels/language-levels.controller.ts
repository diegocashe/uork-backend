import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLevelsService } from './language-levels.service';
import { CreateLanguageLevelDto } from './dto/create-language-level.dto';
import { UpdateLanguageLevelDto } from './dto/update-language-level.dto';

@Controller('language-levels')
export class LanguageLevelsController {
  constructor(private readonly languageLevelsService: LanguageLevelsService) {}

  @Post()
  create(@Body() createLanguageLevelDto: CreateLanguageLevelDto) {
    return this.languageLevelsService.create(createLanguageLevelDto);
  }

  @Get()
  findAll() {
    return this.languageLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLevelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLevelDto: UpdateLanguageLevelDto) {
    return this.languageLevelsService.update(+id, updateLanguageLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLevelsService.remove(+id);
  }
}
