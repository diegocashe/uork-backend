import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './entities/worker.entity';

@Module({
  imports: [SequelizeModule.forFeature([Worker])],
  exports:[SequelizeModule, WorkersService],
  controllers: [WorkersController],
  providers: [WorkersService]
})
export class WorkersModule {}
