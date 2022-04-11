import { Module } from '@nestjs/common';
import { ProfitsService } from './profits.service';
import { ProfitsController } from './profits.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profit } from './entities/profit.entity';

@Module({
  imports: [SequelizeModule.forFeature([Profit])],
  exports:[SequelizeModule],
  controllers: [ProfitsController],
  providers: [ProfitsService]
})
export class ProfitsModule {}
