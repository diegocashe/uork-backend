import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOptions } from 'sequelize/types';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {

  constructor(
    @InjectModel(Person)
    private peopleModel: typeof Person
  ) { }

  create(createPersonDto: CreatePersonDto, options?: CreateOptions) {
    return this.peopleModel.create({ ...createPersonDto }, options);
  }

  findAll() {
    return `This action returns all people`;
  }

  findOne(id: number) {
    return this.peopleModel.findByPk(id, {include: [ 'educations', 'languages', 'servicesProvided', 'skills', 'interests']});
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
