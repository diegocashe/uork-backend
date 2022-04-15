import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServicesProvidedDto } from './dto/create-services-provided.dto';
import { UpdateServicesProvidedDto } from './dto/update-services-provided.dto';
import { ServicesProvided } from './entities/services-provided.entity';
import { UpdateCountryDto } from '../countries/dto/update-country.dto';

@Injectable()
export class ServicesProvidedService {

  constructor(
    @InjectModel(ServicesProvided)
    private serviceProvidedModel: typeof ServicesProvided
  ) { }

  create(createServicesProvidedDto: CreateServicesProvidedDto) {
    return this.serviceProvidedModel.create({ ...createServicesProvidedDto });
  }

  findAll() {
    return this.serviceProvidedModel.findAll();
  }

  findOne(id: number) {
    return this.serviceProvidedModel.findByPk(id);
  }

  update(id: number, updateServicesProvidedDto: UpdateServicesProvidedDto) {
    return this.serviceProvidedModel.update(
      { ...UpdateCountryDto },
      {
        where: { id: id }
      }
    );
  }

  remove(id: number) {
    return this.serviceProvidedModel.destroy({
      where: {
        id: id
      }
    });
  }
}
