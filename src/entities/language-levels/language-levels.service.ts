import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageLevelDto } from './dto/create-language-level.dto';
import { UpdateLanguageLevelDto } from './dto/update-language-level.dto';
import { LanguageLevel } from './entities/language-level.entity';

@Injectable()
export class LanguageLevelsService {

  constructor(
    @InjectModel(LanguageLevel)
    private languagelevelModel: typeof LanguageLevel
  ) { }

  create(createLanguageLevelDto: CreateLanguageLevelDto) {
    return this.languagelevelModel.create({ ...createLanguageLevelDto });
  }

  findAll() {
    return this.languagelevelModel.findAll();
  }

  findOne(id: number) {
    return this.languagelevelModel.findByPk(id);
  }

  update(id: number, updateLanguageLevelDto: UpdateLanguageLevelDto) {
    return this.languagelevelModel.update(
      { ...updateLanguageLevelDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.languagelevelModel.destroy({
      where: {
        id: id
      }
    });
  }
}
