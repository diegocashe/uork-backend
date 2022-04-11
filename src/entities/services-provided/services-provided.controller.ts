import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesProvidedService } from './services-provided.service';
import { CreateServicesProvidedDto } from './dto/create-services-provided.dto';
import { UpdateServicesProvidedDto } from './dto/update-services-provided.dto';

@Controller('services-provided')
export class ServicesProvidedController {
  constructor(private readonly servicesProvidedService: ServicesProvidedService) {}

  @Post()
  create(@Body() createServicesProvidedDto: CreateServicesProvidedDto) {
    return this.servicesProvidedService.create(createServicesProvidedDto);
  }

  @Get()
  findAll() {
    return this.servicesProvidedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesProvidedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicesProvidedDto: UpdateServicesProvidedDto) {
    return this.servicesProvidedService.update(+id, updateServicesProvidedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesProvidedService.remove(+id);
  }
}
