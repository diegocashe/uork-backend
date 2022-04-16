import { Injectable } from '@nestjs/common';
import { CreatePeopleEducationDto } from './dto/create-people-education.dto';
import { UpdatePeopleEducationDto } from './dto/update-people-education.dto';

@Injectable()
export class PeopleEducationService {
  create(createPeopleEducationDto: CreatePeopleEducationDto) {
    return 'This action adds a new peopleEducation';
  }

  findAll() {
    return `This action returns all peopleEducation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peopleEducation`;
  }

  update(id: number, updatePeopleEducationDto: UpdatePeopleEducationDto) {
    return `This action updates a #${id} peopleEducation`;
  }

  remove(id: number) {
    return `This action removes a #${id} peopleEducation`;
  }
}
