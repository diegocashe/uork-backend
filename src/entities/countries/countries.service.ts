import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {

  constructor(
    @InjectModel(Country)
    private countryModel: typeof Country
  ) { }

  create(createCountryDto: CreateCountryDto) {
    return this.countryModel.create({ ...createCountryDto });
  }

  findAll() {
    return this.countryModel.findAll();
  }

  findOne(id: number) {
    return this.countryModel.findByPk(id);
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryModel.update(
      { ...updateCountryDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.countryModel.destroy({
      where: {
        id: id
      }
    });
  }
}
