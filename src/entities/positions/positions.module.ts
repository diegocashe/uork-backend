import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Position } from './entities/position.entity';

@Module({
  imports: [SequelizeModule.forFeature([Position])],
  exports:[SequelizeModule],
  controllers: [PositionsController],
  providers: [PositionsService]
})
export class PositionsModule {}
