import { Module } from '@nestjs/common';
import { PeopleEducationService } from './people-education.service';
import { PeopleEducationController } from './people-education.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PeopleEducation } from './entities/people-education.entity';

@Module({
  imports: [SequelizeModule.forFeature([PeopleEducation])],
  controllers: [PeopleEducationController],
  exports: [SequelizeModule, PeopleEducationService],
  providers: [PeopleEducationService]
})
export class PeopleEducationModule { }

