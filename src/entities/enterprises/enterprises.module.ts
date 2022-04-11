import { Module } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';
import { EnterprisesController } from './enterprises.controller';
import { Enterprise } from './entities/enterprise.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Enterprise])],
  exports:[SequelizeModule, EnterprisesService],
  controllers: [EnterprisesController],
  providers: [EnterprisesService]
})
export class EnterprisesModule {}
