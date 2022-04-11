import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnterprisesLegalFormsService } from './enterprises-legal-forms.service';
import { CreateEnterprisesLegalFormDto } from './dto/create-enterprises-legal-form.dto';
import { UpdateEnterprisesLegalFormDto } from './dto/update-enterprises-legal-form.dto';

@Controller('enterprises-legal-forms')
export class EnterprisesLegalFormsController {
  constructor(private readonly enterprisesLegalFormsService: EnterprisesLegalFormsService) {}

  @Post()
  create(@Body() createEnterprisesLegalFormDto: CreateEnterprisesLegalFormDto) {
    return this.enterprisesLegalFormsService.create(createEnterprisesLegalFormDto);
  }

  @Get()
  findAll() {
    return this.enterprisesLegalFormsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterprisesLegalFormsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnterprisesLegalFormDto: UpdateEnterprisesLegalFormDto) {
    return this.enterprisesLegalFormsService.update(+id, updateEnterprisesLegalFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterprisesLegalFormsService.remove(+id);
  }
}
