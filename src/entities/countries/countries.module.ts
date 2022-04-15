import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './entities/country.entity';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  exports:[SequelizeModule, CountriesService ],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {}
