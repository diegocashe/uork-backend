import { Injectable } from '@nestjs/common';
import { CreateEducationTypeDto } from './dto/create-education-type.dto';
import { UpdateEducationTypeDto } from './dto/update-education-type.dto';

@Injectable()
export class EducationTypesService {
  create(createEducationTypeDto: CreateEducationTypeDto) {
    return 'This action adds a new educationType';
  }

  findAll() {
    return `This action returns all educationTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationType`;
  }

  update(id: number, updateEducationTypeDto: UpdateEducationTypeDto) {
    return `This action updates a #${id} educationType`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationType`;
  }
}
