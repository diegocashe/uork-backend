import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  
  constructor(
    @InjectModel(Language)
    private LanguageModel: typeof Language
  ) { }

  create(createLanguageDto: CreateLanguageDto) {
    return this.LanguageModel.create({ ...createLanguageDto });
  }

  findAll() {
    return this.LanguageModel.findAll();
  }

  findOne(id: number) {
    return this.LanguageModel.findByPk(id);
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.LanguageModel.update(
      { ...updateLanguageDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.LanguageModel.destroy({
      where: {
        id: id
      }
    });
  }
}
