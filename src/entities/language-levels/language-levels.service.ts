import { Injectable } from '@nestjs/common';
import { CreateLanguageLevelDto } from './dto/create-language-level.dto';
import { UpdateLanguageLevelDto } from './dto/update-language-level.dto';

@Injectable()
export class LanguageLevelsService {
  create(createLanguageLevelDto: CreateLanguageLevelDto) {
    return 'This action adds a new languageLevel';
  }

  findAll() {
    return `This action returns all languageLevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLevel`;
  }

  update(id: number, updateLanguageLevelDto: UpdateLanguageLevelDto) {
    return `This action updates a #${id} languageLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLevel`;
  }
}
