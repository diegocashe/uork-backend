import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './entities/state.entity';

@Module({
  imports: [SequelizeModule.forFeature([State])],
  exports: [SequelizeModule, StatesService],
  controllers: [StatesController],
  providers: [StatesService]
})
export class StatesModule { }
