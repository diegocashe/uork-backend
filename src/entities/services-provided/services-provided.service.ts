import { Injectable } from '@nestjs/common';
import { CreateServicesProvidedDto } from './dto/create-services-provided.dto';
import { UpdateServicesProvidedDto } from './dto/update-services-provided.dto';

@Injectable()
export class ServicesProvidedService {
  create(createServicesProvidedDto: CreateServicesProvidedDto) {
    return 'This action adds a new servicesProvided';
  }

  findAll() {
    return `This action returns all servicesProvided`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicesProvided`;
  }

  update(id: number, updateServicesProvidedDto: UpdateServicesProvidedDto) {
    return `This action updates a #${id} servicesProvided`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicesProvided`;
  }
}
