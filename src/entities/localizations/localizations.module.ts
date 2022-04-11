import { Module } from '@nestjs/common';
import { LocalizationsService } from './localizations.service';
import { LocalizationsController } from './localizations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Localization } from './entities/localization.entity';

@Module({
  imports: [SequelizeModule.forFeature([Localization])],
  exports:[SequelizeModule],
  controllers: [LocalizationsController],
  providers: [LocalizationsService]
})
export class LocalizationsModule {}
