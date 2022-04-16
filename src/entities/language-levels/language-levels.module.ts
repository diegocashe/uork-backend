import { Module } from '@nestjs/common';
import { LanguageLevelsService } from './language-levels.service';
import { LanguageLevelsController } from './language-levels.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageLevel } from './entities/language-level.entity';

@Module({
  imports: [SequelizeModule.forFeature([LanguageLevel])],
  exports:[SequelizeModule, LanguageLevelsService],
  controllers: [LanguageLevelsController],
  providers: [LanguageLevelsService]
})
export class LanguageLevelsModule {}
