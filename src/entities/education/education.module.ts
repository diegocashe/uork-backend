import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Education } from './entities/education.entity';

@Module({
  imports: [SequelizeModule.forFeature([Education])],
  exports:[SequelizeModule],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
