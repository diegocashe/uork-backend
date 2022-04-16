import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguagePersonDto } from './dto/create-language-person.dto';
import { UpdateLanguagePersonDto } from './dto/update-language-person.dto';
import { LanguagePerson } from './entities/language-person.entity';

@Injectable()
export class LanguagePeopleService {

  constructor(
    @InjectModel(LanguagePerson)
    private languagepeopleModel: typeof LanguagePerson
  ) { }

  create(createLanguagePersonDto: CreateLanguagePersonDto) {
    return this.languagepeopleModel.create({ ...createLanguagePersonDto });
  }

  findAll() {
    return this.languagepeopleModel.findAll();
  }

  findOne(id: number) {
    return this.languagepeopleModel.findByPk(id);
  }

  update(id: number, updateLanguagePersonDto: UpdateLanguagePersonDto) {
    return this.languagepeopleModel.update(
      { ...updateLanguagePersonDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.languagepeopleModel.destroy({
      where: {
        id: id
      }
    });
  }
}
