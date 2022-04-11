import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguagePeopleService } from './language-people.service';
import { CreateLanguagePersonDto } from './dto/create-language-person.dto';
import { UpdateLanguagePersonDto } from './dto/update-language-person.dto';

@Controller('language-people')
export class LanguagePeopleController {
  constructor(private readonly languagePeopleService: LanguagePeopleService) {}

  @Post()
  create(@Body() createLanguagePersonDto: CreateLanguagePersonDto) {
    return this.languagePeopleService.create(createLanguagePersonDto);
  }

  @Get()
  findAll() {
    return this.languagePeopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languagePeopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguagePersonDto: UpdateLanguagePersonDto) {
    return this.languagePeopleService.update(+id, updateLanguagePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagePeopleService.remove(+id);
  }
}
