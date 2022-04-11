import { Injectable } from '@nestjs/common';
import { CreateLanguagePersonDto } from './dto/create-language-person.dto';
import { UpdateLanguagePersonDto } from './dto/update-language-person.dto';

@Injectable()
export class LanguagePeopleService {
  create(createLanguagePersonDto: CreateLanguagePersonDto) {
    return 'This action adds a new languagePerson';
  }

  findAll() {
    return `This action returns all languagePeople`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languagePerson`;
  }

  update(id: number, updateLanguagePersonDto: UpdateLanguagePersonDto) {
    return `This action updates a #${id} languagePerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} languagePerson`;
  }
}
