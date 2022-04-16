import { Module } from '@nestjs/common';
import { LanguagePeopleService } from './language-people.service';
import { LanguagePeopleController } from './language-people.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguagePerson } from './entities/language-person.entity';

@Module({
  imports: [SequelizeModule.forFeature([LanguagePerson])],
  exports:[SequelizeModule, LanguagePeopleService],
  controllers: [LanguagePeopleController],
  providers: [LanguagePeopleService]
})
export class LanguagePeopleModule {}
