import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLocalizationDto } from './dto/create-localization.dto';
import { UpdateLocalizationDto } from './dto/update-localization.dto';
import { Localization } from './entities/localization.entity';

@Injectable()
export class LocalizationsService {

  constructor(
    @InjectModel(Localization)
    private localizationModel: typeof Localization
  ) { }

  create(createLocalizationDto: CreateLocalizationDto) {
    return this.localizationModel.create({ ...CreateLocalizationDto });
  }

  findAll() {
    return this.localizationModel.findAll();
  }

  findOne(id: number) {
    return this.localizationModel.findByPk(id);
  }

  update(id: number, updateLocalizationDto: UpdateLocalizationDto) {
    return this.localizationModel.update(
      { ...updateLocalizationDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.localizationModel.destroy({
      where: {
        id: id
      }
    });
  }
}
